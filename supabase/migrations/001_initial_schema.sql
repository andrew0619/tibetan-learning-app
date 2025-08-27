-- 創建用戶進度表
CREATE TABLE IF NOT EXISTS user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  card_id TEXT NOT NULL,
  stage TEXT CHECK (stage IN ('learning', 'recall', 'mastered')) DEFAULT 'learning',
  difficulty INTEGER DEFAULT 1 CHECK (difficulty >= 1 AND difficulty <= 5),
  last_reviewed TIMESTAMPTZ DEFAULT NOW(),
  next_review TIMESTAMPTZ DEFAULT NOW() + INTERVAL '1 hour',
  review_count INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, card_id)
);

-- 創建用戶統計表
CREATE TABLE IF NOT EXISTS user_stats (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  total_cards INTEGER DEFAULT 0,
  learning_cards INTEGER DEFAULT 0,
  recall_cards INTEGER DEFAULT 0,
  mastered_cards INTEGER DEFAULT 0,
  daily_streak INTEGER DEFAULT 0,
  total_study_time INTEGER DEFAULT 0, -- 以秒為單位
  last_study_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 創建學習會話記錄表
CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  card_id TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  study_time INTEGER NOT NULL, -- 以秒為單位
  session_date TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 創建用戶設置表
CREATE TABLE IF NOT EXISTS user_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  daily_goal INTEGER DEFAULT 20,
  preferred_font TEXT DEFAULT 'YagpoUni',
  font_size TEXT DEFAULT 'large',
  show_kham_pronunciation BOOLEAN DEFAULT true,
  auto_play_audio BOOLEAN DEFAULT false,
  theme TEXT DEFAULT 'light',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 創建索引以提高查詢性能
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_next_review ON user_progress(next_review);
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_date ON study_sessions(session_date);

-- 創建更新時間戳的函數
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 為相關表創建觸發器
CREATE TRIGGER update_user_progress_updated_at 
    BEFORE UPDATE ON user_progress 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_stats_updated_at 
    BEFORE UPDATE ON user_stats 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_settings_updated_at 
    BEFORE UPDATE ON user_settings 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 創建 RLS (Row Level Security) 政策
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;

-- 用戶只能訪問自己的數據
CREATE POLICY "Users can view own progress" ON user_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress" ON user_progress
    FOR DELETE USING (auth.uid() = user_id);

-- 用戶統計政策
CREATE POLICY "Users can view own stats" ON user_stats
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own stats" ON user_stats
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own stats" ON user_stats
    FOR UPDATE USING (auth.uid() = user_id);

-- 學習會話政策
CREATE POLICY "Users can view own sessions" ON study_sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions" ON study_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 用戶設置政策
CREATE POLICY "Users can view own settings" ON user_settings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings" ON user_settings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings" ON user_settings
    FOR UPDATE USING (auth.uid() = user_id);

-- 創建函數來自動更新統計數據
CREATE OR REPLACE FUNCTION update_user_stats_on_progress_change()
RETURNS TRIGGER AS $$
BEGIN
    -- 更新用戶統計
    INSERT INTO user_stats (user_id, total_cards, learning_cards, recall_cards, mastered_cards)
    SELECT 
        NEW.user_id,
        COUNT(*) as total_cards,
        COUNT(*) FILTER (WHERE stage = 'learning') as learning_cards,
        COUNT(*) FILTER (WHERE stage = 'recall') as recall_cards,
        COUNT(*) FILTER (WHERE stage = 'mastered') as mastered_cards
    FROM user_progress 
    WHERE user_id = NEW.user_id
    ON CONFLICT (user_id) DO UPDATE SET
        total_cards = EXCLUDED.total_cards,
        learning_cards = EXCLUDED.learning_cards,
        recall_cards = EXCLUDED.recall_cards,
        mastered_cards = EXCLUDED.mastered_cards,
        updated_at = NOW();
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 創建觸發器來自動更新統計
CREATE TRIGGER update_stats_on_progress_change
    AFTER INSERT OR UPDATE OR DELETE ON user_progress
    FOR EACH ROW EXECUTE FUNCTION update_user_stats_on_progress_change();
