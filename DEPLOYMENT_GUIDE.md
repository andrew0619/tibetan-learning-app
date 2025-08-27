# 🚀 藏文學習應用部署指南

這份指南將幫助您將藏文學習應用部署到網上，讓朋友們可以註冊使用。

## 📋 部署步驟概覽

1. **設置 Supabase 數據庫**
2. **配置環境變量**
3. **部署到 Vercel**
4. **設置自定義域名（可選）**
5. **邀請朋友使用**

---

## 1️⃣ 設置 Supabase 數據庫

### 創建 Supabase 項目

1. 訪問 [supabase.com](https://supabase.com)
2. 點擊 "Start your project"
3. 使用 GitHub 帳戶登入
4. 點擊 "New project"
5. 選擇組織，輸入項目名稱：`tibetan-learning-app`
6. 設置數據庫密碼（請記住這個密碼）
7. 選擇地區（建議選擇 Singapore 或 Tokyo）
8. 點擊 "Create new project"

### 運行數據庫遷移

1. 等待項目創建完成
2. 在 Supabase Dashboard 中，點擊左側的 "SQL Editor"
3. 點擊 "New query"
4. 複製 `supabase/migrations/001_initial_schema.sql` 的內容
5. 貼上到 SQL 編輯器中
6. 點擊 "Run" 執行遷移

### 獲取 API 密鑰

1. 在 Supabase Dashboard 中，點擊左側的 "Settings"
2. 點擊 "API"
3. 複製以下信息：
   - **Project URL**: `https://your-project-ref.supabase.co`
   - **anon/public key**: `eyJ...` (很長的字符串)
   - **service_role key**: `eyJ...` (另一個很長的字符串)

---

## 2️⃣ 配置環境變量

### 創建 .env.local 文件

在項目根目錄創建 `.env.local` 文件：

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-app-name.vercel.app
NEXT_PUBLIC_APP_NAME=藏文學習應用
```

**⚠️ 重要**: 將 `your-project-ref`、`your_anon_key_here` 和 `your_service_role_key_here` 替換為您從 Supabase 獲取的實際值。

---

## 3️⃣ 部署到 Vercel

### 準備部署

1. 確保所有更改已提交到 GitHub：
   ```bash
   git add .
   git commit -m "準備部署：添加用戶系統和數據庫"
   git push
   ```

### 在 Vercel 上部署

1. 訪問 [vercel.com](https://vercel.com)
2. 使用 GitHub 帳戶登入
3. 點擊 "New Project"
4. 選擇您的 `tibetan-learning-app` repository
5. 點擊 "Import"

### 配置環境變量

1. 在 Vercel 項目設置中，點擊 "Environment Variables"
2. 添加以下環境變量：

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project-ref.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your_anon_key_here` |
   | `SUPABASE_SERVICE_ROLE_KEY` | `your_service_role_key_here` |
   | `NEXT_PUBLIC_APP_URL` | `https://your-app-name.vercel.app` |

3. 點擊 "Deploy" 開始部署

### 等待部署完成

- 部署通常需要 2-5 分鐘
- 完成後，您會獲得一個 URL，例如：`https://tibetan-learning-app.vercel.app`

---

## 4️⃣ 設置自定義域名（可選）

如果您有自己的域名：

1. 在 Vercel 項目設置中，點擊 "Domains"
2. 輸入您的域名，例如：`tibetan-learning.your-domain.com`
3. 按照 Vercel 的指示配置 DNS 記錄
4. 等待 DNS 生效（通常 24 小時內）

---

## 5️⃣ 邀請朋友使用

### 分享應用

將您的應用 URL 分享給朋友：
- **Vercel URL**: `https://your-app-name.vercel.app`
- **自定義域名**: `https://your-custom-domain.com`

### 用戶註冊流程

您的朋友可以：

1. **訪問應用** → 點擊右上角的「個人中心」
2. **註冊帳戶** → 輸入電子郵件、密碼和顯示名稱
3. **開始學習** → 立即開始使用所有學習功能
4. **追蹤進度** → 個人儀表板顯示學習統計

### 功能特色

✅ **個人化學習進度** - 每個用戶都有獨立的學習記錄  
✅ **學習統計** - 連續學習天數、掌握字卡數量、學習時間  
✅ **今日目標** - 每日學習目標和進度追蹤  
✅ **成就系統** - 連續學習和掌握字卡的成就徽章  
✅ **多種學習模式** - 基礎字母、完整字母系統、佛學詞彙  
✅ **專業字體** - YagpoUni 專業藏文字體支持  

---

## 🔧 維護和更新

### 更新應用

當您對應用進行更改時：

1. 提交更改到 GitHub：
   ```bash
   git add .
   git commit -m "描述您的更改"
   git push
   ```

2. Vercel 會自動重新部署應用

### 監控使用情況

- **Supabase Dashboard** → "Authentication" → 查看註冊用戶
- **Supabase Dashboard** → "Table Editor" → 查看用戶進度數據
- **Vercel Dashboard** → "Analytics" → 查看訪問統計

### 數據備份

定期在 Supabase Dashboard 中：
1. 點擊 "Settings" → "General"
2. 滾動到 "Danger Zone"
3. 點擊 "Download backup" 下載數據備份

---

## 🆘 故障排除

### 常見問題

**Q: 用戶無法註冊**
- 檢查 Supabase 環境變量是否正確
- 確認 Supabase 項目狀態正常

**Q: 學習進度沒有保存**
- 檢查數據庫遷移是否成功執行
- 確認用戶已登入

**Q: 字體沒有正確顯示**
- 確認字體文件在 `public/Fonts/` 目錄中
- 檢查 CSS 文件是否正確載入

**Q: 部署失敗**
- 檢查所有環境變量是否正確設置
- 查看 Vercel 部署日誌中的錯誤信息

### 獲取幫助

如果遇到問題：
1. 檢查 Vercel 部署日誌
2. 檢查瀏覽器開發者工具的控制台
3. 查看 Supabase Dashboard 的日誌

---

## 🎉 完成！

恭喜！您的藏文學習應用現在已經上線，朋友們可以：

- 🔐 **註冊個人帳戶**
- 📊 **追蹤學習進度**
- 🏆 **獲得學習成就**
- 📱 **在任何設備上使用**
- 🌐 **隨時隨地學習**

現在就分享您的應用 URL，讓更多人開始學習藏文吧！ 🙏
