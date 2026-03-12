// 後台管理系統 JavaScript

// 簡單的密碼（可以改成你想要的）
const ADMIN_PASSWORD = '123456';
let isLoggedIn = false;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    checkLogin();
});

// 檢查登錄狀態
function checkLogin() {
    const loginStatus = localStorage.getItem('adminLoggedIn');
    const loginTime = localStorage.getItem('adminLoginTime');
    const currentTime = Date.now();
    
    // 登錄狀態有效期為 24 小時
    if (loginStatus === 'true' && loginTime && (currentTime - parseInt(loginTime)) < 86400000) {
        isLoggedIn = true;
        showAdmin();
    } else {
        showLogin();
        isLoggedIn = false;
    }
}

// 顯示登錄表單
function showLogin() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('adminContainer').style.display = 'none';
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

// 顯示後台管理界面
function showAdmin() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('adminContainer').style.display = 'block';
    
    // 加載數據
    loadPhotos();
    loadPlayers();
    setupAdminEventListeners();
    displayPhotoList();
    displayPlayerList();
}

// 處理登錄
function handleLogin(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminLoginTime', Date.now().toString());
        isLoggedIn = true;
        document.getElementById('password').value = '';
        showAdmin();
    } else {
        alert('密碼錯誤，請重試');
        document.getElementById('password').value = '';
    }
}

// 登出
function logout() {
    if (confirm('確定要登出嗎？')) {
        localStorage.removeItem('adminLoggedIn');
        localStorage.removeItem('adminLoginTime');
        isLoggedIn = false;
        showLogin();
    }
}

// 設置後台事件監聽器
function setupAdminEventListeners() {
    const photoForm = document.getElementById('photoForm');
    const playerForm = document.getElementById('playerForm');

    if (photoForm) {
        photoForm.addEventListener('submit', handlePhotoUpload);
    }

    if (playerForm) {
        playerForm.addEventListener('submit', handlePlayerAdd);
    }
}

// ============ 照片管理功能 ============

// 處理照片上傳
function handlePhotoUpload(e) {
    e.preventDefault();

    const title = document.getElementById('photoTitle').value;
    const description = document.getElementById('photoDescription').value;
    const url = document.getElementById('photoUrl').value;

    if (!title || !url) {
        alert('請填写標題和URL');
        return;
    }

    const photo = {
        id: Date.now(),
        title: title,
        description: description,
        image: url,
        date: new Date().toLocaleDateString('zh-TW')
    };

    photos.push(photo);
    savePhotos();
    displayPhotoList();
    document.getElementById('photoForm').reset();
    alert('照片已成功新增！');
}

// 顯示照片列表
function displayPhotoList() {
    const list = document.getElementById('photoList');
    
    if (photos.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">暫時還沒有照片</p>';
        return;
    }

    list.innerHTML = photos.map(photo => `
        <div class="item">
            <img src="${photo.image}" alt="${photo.title}" class="item-image">
            <div class="item-info">
                <div class="item-title">${photo.title}</div>
                <div class="item-desc">${photo.description || '（無說明）'}</div>
                <div class="item-desc" style="font-size: 0.8em; color: #999;">上傳日期：${photo.date}</div>
            </div>
            <div class="item-actions">
                <button class="btn-small btn-delete" onclick="deletePhotoAdmin(${photo.id})">刪除</button>
            </div>
        </div>
    `).join('');
}

// 後台刪除照片
function deletePhotoAdmin(id) {
    if (confirm('確定要刪除這張照片嗎？')) {
        photos = photos.filter(photo => photo.id !== id);
        savePhotos();
        displayPhotoList();
    }
}

// ============ 球員管理功能 ============

// 處理新增球員
function handlePlayerAdd(e) {
    e.preventDefault();

    const name = document.getElementById('playerName').value;
    const position = document.getElementById('playerPosition').value;
    const description = document.getElementById('playerDescription').value;
    const photoUrl = document.getElementById('playerPhotoUrl').value;

    if (!name || !position || !photoUrl) {
        alert('請填写杣4個字段');
        return;
    }

    const player = {
        id: Date.now(),
        name: name,
        position: position,
        description: description,
        photo: photoUrl
    };

    players.push(player);
    savePlayers();
    displayPlayerList();
    document.getElementById('playerForm').reset();
    alert('球員已成功新增！');
}

// 顯示球員列表
function displayPlayerList() {
    const list = document.getElementById('playerList');
    
    if (players.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #999;">暫時還沒有球員</p>';
        return;
    }

    list.innerHTML = players.map(player => `
        <div class="item">
            ${player.photo ? `<img src="${player.photo}" alt="${player.name}" class="item-image">` : ''}
            <div class="item-info">
                <div class="item-title">${player.name}</div>
                <div class="item-desc">${player.position}</div>
                <div class="item-desc">${player.description || '（無描述）'}</div>
            </div>
            <div class="item-actions">
                <button class="btn-small btn-delete" onclick="deletePlayerAdmin(${player.id})">刪除</button>
            </div>
        </div>
    `).join('');
}

// 後台刪除球員
function deletePlayerAdmin(id) {
    if (confirm('確定要刪除這位球員嗎？')) {
        players = players.filter(player => player.id !== id);
        savePlayers();
        displayPlayerList();
    }
}
