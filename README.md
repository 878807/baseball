# ⚾ 棒球隊介紹網站

這是一個簡單但功能完整的棒球隊介紹網站，包含照片上傳和管理功能。網站使用純 HTML、CSS 和 JavaScript，可以輕鬆地在 GitHub Pages 上托管。

## 功能

✅ 球隊介紹頁面  
✅ 照片上傳和管理（支援多張照片）  
✅ 球隊成員資訊  
✅ 聯絡表單  
✅ 響應式設計（支援手機、平板、電腦）  
✅ 本地存儲（照片保存在瀏覽器本地存儲中）  

## 文件結構

```
baseball/
├── index.html          # 主頁面
├── styles.css          # 樣式表
├── script.js           # JavaScript 功能
├── README.md           # 這個文件
└── .gitignore          # Git 忽略文件
```

## 如何使用

### 1. 本地測試

直接在瀏覽器中打開 `index.html` 文件，或使用本地伺服器：

```bash
# 使用 Python 3
python -m http.server 8000

# 使用 Python 2
python -m SimpleHTTPServer 8000

# 使用 Node.js (需要安裝 http-server)
npx http-server
```

然後在瀏覽器中訪問 `http://localhost:8000`

### 2. 在 GitHub Pages 上發佈

#### 方法 A: 使用現有 GitHub 帳戶

1. **創建 GitHub 帳戶**（如果還沒有的話）
   - 訪問 https://github.com
   - 點擊「Sign up」創建新帳戶

2. **創建新倉庫**
   - 登錄 GitHub
   - 點擊「New repository」（新建倉庫）
   - 倉庫名稱：`baseball` 或 `<你的用戶名>.github.io`
   - 選擇「Public」（公開）
   - 點擊「Create repository」

3. **上傳文件**
   - 在倉庫頁面上，點擊「Add file」> 「Upload files」
   - 選擇 `index.html`、`styles.css`、`script.js` 和 `README.md` 文件
   - 點擊「Commit changes」（提交變更）

4. **啟用 GitHub Pages**
   - 在倉庫頁面點擊「Settings」（設置）
   - 左邊選單點擊「Pages」
   - 在「Source」下選擇「main」分支
   - 點擊「Save」（保存）
   - 等待數分鐘後，你的網站將在 `https://<你的用戶名>.github.io/baseball` 發佈

#### 方法 B: 使用 Git 命令行

1. **初始化 Git 倉庫**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Baseball team website"
   ```

2. **添加遠程倉庫**
   ```bash
   git remote add origin https://github.com/<你的用戶名>/baseball.git
   git branch -M main
   git push -u origin main
   ```

3. **在倉庫設置中啟用 GitHub Pages**（同上方法 A 的第 4 步）

## 照片上傳功能

網站支援新增照片。照片會保存在瀏覽器的本地存儲中（最多幾 MB）。

**重要要點：**
- 照片存儲在瀏覽器的本地存儲中，只對訪問你網站的本機有效
- 清除瀏覽器數據或在不同裝置上訪問時，照片會遺失
- 如希望永久保存照片，請考慮使用 Cloudinary、Imgur 或其他圖像託管服務

### 改進：使用外部圖像服務

如果你想要永久保存照片，可以修改 `script.js` 以上傳到免費的圖像服務，例如 Cloudinary 或 Imgur。

## 自訂內容

### 修改球隊名稱和信息

編輯 `index.html`，找到以下部分並修改：

```html
<h1>⚾ 勇士隊</h1>  <!-- 修改這裡 -->
```

### 修改球隊成員

在 `index.html` 的「球隊成員」部分修改成員信息：

```html
<div class="team-member">
    <h3>教練：李明</h3>  <!-- 修改這裡 -->
    <p>經驗豐富的棒球教練，帶領球隊多年。</p>  <!-- 修改這裡 -->
</div>
```

### 修改顏色主題

編輯 `styles.css` 中的顏色值。主要顏色變量：

```css
#667eea  /* 紫藍色 */
#764ba2  /* 深紫色 */
#333     /* 深灰色 */
```

## 技術詳情

- **HTML5**: 現代語義化 HTML
- **CSS3**: 使用 Grid 和 Flexbox 進行響應式設計
- **JavaScript**: 原生 JavaScript（不需要框架）
- **存儲**: 使用瀏覽器的 localStorage API

## 故障排除

### 照片上傳後看不到
- 檢查瀏覽器的開發者工具（F12）中是否有錯誤信息
- 確認瀏覽器支援 localStorage（大多數現代瀏覽器都支援）
- 試試清除瀏覽器快取並重新加載頁面

### GitHub Pages 未顯示
- 確認倉庫是「Public」（公開）
- 等待 1-2 分鐘讓 GitHub 構建網站
- 檢查倉庫設置中的 GitHub Pages 是否已啟用

### 聯絡表單無法發送
- 目前聯絡表單只顯示確認訊息，不會實際發送電子郵件
- 要實現真正的電子郵件功能，需要後端伺服器（例如 Formspree、Netlify Forms）

## 下一步建議

1. 使用 Formspree 或 Netlify Forms 實現聯絡表單功能
2. 整合 Cloudinary 或 Imgur API 用於永久圖像存儲
3. 添加部落格功能來發佈球隊新聞
4. 添加比賽排程和統計數據
5. 使用自訂域名（例如 www.mybaseballteam.com）

## 授權

此項目採用 MIT 授權。詳見 LICENSE 文件。

## 支持

如有任何問題或建議，請創建 Issue 或提交 Pull Request。

---

**創建日期**: 2026 年 3 月  
**最後更新**: 2026 年 3 月
