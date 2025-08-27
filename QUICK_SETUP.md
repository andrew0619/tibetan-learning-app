# ⚡ 快速設置指南

這是一個簡化的設置指南，幫助您快速部署藏文學習應用。

## 🎯 5分鐘快速部署

### 步驟 1: 設置 Supabase（2分鐘）

1. 訪問 [supabase.com](https://supabase.com) → 註冊/登入
2. 點擊 "New project" → 輸入項目名稱 `tibetan-learning`
3. 設置密碼 → 選擇地區 → 點擊 "Create new project"
4. 等待項目創建完成

### 步驟 2: 配置數據庫（1分鐘）

1. 在 Supabase Dashboard → 點擊 "SQL Editor"
2. 點擊 "New query"
3. 複製並貼上 `supabase/migrations/001_initial_schema.sql` 的內容
4. 點擊 "Run" 執行

### 步驟 3: 獲取 API 密鑰（30秒）

1. 點擊 "Settings" → "API"
2. 複製：
   - Project URL: `https://xxx.supabase.co`
   - anon public key: `eyJ...`

### 步驟 4: 部署到 Vercel（2分鐘）

1. 訪問 [vercel.com](https://vercel.com) → 用 GitHub 登入
2. 點擊 "New Project" → 選擇您的 repository
3. 在 "Environment Variables" 添加：
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJ...
   ```
4. 點擊 "Deploy"

### 步驟 5: 完成！

- 獲得您的應用 URL：`https://your-app.vercel.app`
- 分享給朋友，他們可以註冊使用！

## 🔗 重要鏈接

- **詳細部署指南**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Supabase**: https://supabase.com
- **Vercel**: https://vercel.com
- **GitHub Repository**: https://github.com/andrew0619/tibetan-learning-app

## 🆘 需要幫助？

如果遇到問題，請查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) 中的詳細說明和故障排除部分。
