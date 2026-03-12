# ⚾ 威焺科技隊 - 官方網站

這是一個完整的棒球隊介紹網站，包含照片上傳管理、球員管理等功能。網站使用純 HTML、CSS 和 JavaScript，可以輕鬆地在 GitHub Pages 上托管。

## 功能

✅ 球隊介紹頁面  
✅ 照片上傳和管理（支援多張照片）  
✅ 球員管理（新增、刪除球員）  
✅ 聯絡表單  
✅ 響應式設計（支援手機、平板、電腦）  
✅ 本地存儲（照片和球員信息保存在瀏覽器本地存儲中）  

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

#### 第1步：在本地測試
```powershell
python -m http.server 8000
```

#### 第2步：在 GitHub 上創建倉庫
1. 訪問 https://github.com 並登錄
2. 點擊「New repository」（新建倉庫）
3. 倉庫名稱填入 `baseball`
4. 選擇「Public」（公開）
5. 點擊「Create repository」（建立倉庫）

#### 第3步：上傳文件到 GitHub
1. 在倉庫頁面點擊「Add file」> 「Upload files」
2. 選擇並上傳以下文件：
   - index.html
   - styles.css
   - script.js
   - README.md
   - .gitignore

3. 點擊「Commit changes」（提交變更）

#### 第4步：啟用 GitHub Pages
1. 在倉庫點擊「Settings」（設置）
2. 左邊選單點擊「Pages」
3. 在「Source」選擇「main」分支
4. 點擊「Save」（保存）

✅ **完成！** 你的網站將在 `https://你的GitHub用戶名.github.io/baseball` 發佈

## 核心功能說明

### 新增照片
1. 滾動到「相片集」部分
2. 填寫照片標題和說明
3. 選擇要上傳的照片
4. 點擊「上傳照片」
5. 照片將顯示在相片集中

### 刪除照片
在相片卡片上點擊「刪除照片」按鈕即可刪除

### 新增球員
1. 滾動到「球隊成員」部分
2. 填寫球員名稱、位置和描述
3. 點擊「新增球員」
4. 新球員將出現在球隊成員網格中

### 刪除球員
在球員卡片上點擊「刪除球員」按鈕即可刪除

## 自訂內容

### 修改球隊信息

編輯 `index.html` 中的以下部分：

```html
<h1>⚾ 威焺科技隊</h1>  <!-- 修改球隊名稱 -->
<p class="tagline">社子島A組棒球舞台上的拚戰精神</p>  <!-- 修改標語 -->
```

### 修改顏色主題

編輯 `styles.css` 中的顏色值。主要顏色變量：

```css
#667eea  /* 紫藍色 */
#764ba2  /* 深紫色 */
#333     /* 深灰色 */
#e74c3c  /* 紅色（刪除按鈕） */
```

## 重要要點

### 數據存儲
- 照片和球員信息存儲在瀏覽器的**本地存儲**中
- 清除瀏覽器數據或在不同裝置上訪問時，數據會遺失
- 本地存儲通常有 5-10 MB 的限制

### 照片管理建議
如果希望永久保存照片，可以考慮：
1. 使用 Cloudinary、Imgur 等免費圖像服務
2. 設置後端伺服器存儲數據
3. 使用 Firebase 或其他雲端數據庫

## 技術詳情

- **HTML5**: 現代語義化 HTML
- **CSS3**: 使用 Grid 和 Flexbox 進行響應式設計
- **JavaScript**: 原生 JavaScript（不需要框架）
- **存儲**: 使用瀏覽器的 localStorage API

## 故障排除

### 數據遺失
- 本地存儲有大小限制。如果上傳太多大型照片，可能會遺失舊數據
- 建議定期將重要照片備份到外部存儲

### GitHub Pages 未顯示
- 確認倉庫是「Public」（公開）
- 等待 1-2 分鐘讓 GitHub 構建網站
- 檢查倉庫設置中的 GitHub Pages 是否已啟用

### 聯絡表單無法發送電子郵件
- 目前聯絡表單只顯示確認訊息，不會實際發送電子郵件
- 要實現真正的電子郵件功能，需要使用 Formspree、Netlify Forms 等服務

## 未來改進建議

1. 🖼️ 整合 Cloudinary 或 Imgur API 用於永久圖像存儲
2. 📧 使用 Formspree 或 Netlify Forms 實現電子郵件功能
3. 📰 添加部落格功能發佈球隊新聞
4. 📊 添加比賽排程和賽績統計
5. 🎨 使用自訂域名（例如 www.mybaseballteam.com）
6. 🔐 添加管理員登錄功能進行內容管理

## 支持

如有任何問題或建議，請創建 Issue 或提交 Pull Request。

---

**創建日期**: 2026 年 3 月  
**球隊名稱**: 威焺科技隊  
**主場**: 社子島 A 組  
**網站維護**: v1.0
