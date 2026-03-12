// 前台展示系統 JavaScript
// 照片和球員集合（存儲在本地存儲中）
let photos = [];
let players = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
    loadPlayers();
    setupEventListeners();
});

// 設置事件監聽器（前台只有聯絡表單）
function setupEventListeners() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// ============ 照片展示功能 ============

// 保存照片到本地存儲
function savePhotos() {
    try {
        localStorage.setItem('baseballPhotos', JSON.stringify(photos));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.error('存儲空間已滿');
        }
    }
}

// 加載照片
function loadPhotos() {
    const stored = localStorage.getItem('baseballPhotos');
    if (stored) {
        try {
            photos = JSON.parse(stored);
            displayPhotos();
        } catch (e) {
            console.error('加載照片時出錯', e);
            photos = [];
        }
    }
}

// 顯示照片集（前台只顯示，不可編輯）
function displayPhotos() {
    const gallery = document.getElementById('photoGallery');
    
    if (!gallery) return; // 後台沒有 photoGallery
    
    if (photos.length === 0) {
        gallery.innerHTML = '<p class="no-photos">暫時還沒有照片。</p>';
        return;
    }

    gallery.innerHTML = photos.map(photo => `
        <div class="photo-card">
            <img src="${photo.image}" alt="${photo.title}">
            <div class="photo-card-content">
                <h3>${photo.title}</h3>
                <p>${photo.description}</p>
                <div class="photo-date">上傳日期：${photo.date}</div>
            </div>
        </div>
    `).join('');
}

// ============ 球員展示功能 ============

// 保存球員到本地存儲
function savePlayers() {
    try {
        localStorage.setItem('baseballPlayers', JSON.stringify(players));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('存儲空間已滿，無法保存更多球員。');
        }
    }
}

// 加載球員
function loadPlayers() {
    const stored = localStorage.getItem('baseballPlayers');
    if (stored) {
        try {
            players = JSON.parse(stored);
            displayPlayers();
        } catch (e) {
            console.error('加載球員時出錯', e);
            players = [];
        }
    }
}

// 顯示球隊成員
function displayPlayers() {
    const teamGrid = document.getElementById('teamGrid');
    
    if (!teamGrid) return;
    
    if (players.length === 0) {
        teamGrid.innerHTML = '<p class="no-players">暫時還沒有球員。</p>';
        return;
    }

    teamGrid.innerHTML = players.map(player => `
        <div class="team-member">
            ${player.photo ? `<img src="${player.photo}" alt="${player.name}" class="player-avatar">` : ''}
            <h3>${player.name}</h3>
            <div class="position">${player.position}</div>
            <p>${player.description || '（暫無描述）'}</p>

        </div>
    `).join('');
}


// ============ 聯絡表單功能 ============

// 處理聯絡表單
function handleContactSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // 這裡我們只是顯示一條確認訊息
    // 在實際應用中，你會將這些訊息發送到伺服器
    
    const contactMessage = document.getElementById('contactMessage');
    contactMessage.textContent = `感謝您的訊息，${name}！我們將盡快回復您的電郵：${email}`;
    contactMessage.className = 'success';

    // 重置表單
    document.getElementById('contactForm').reset();

    // 3 秒後隱藏訊息
    setTimeout(() => {
        contactMessage.style.display = 'none';
    }, 3000);
}

// 平滑滾動導航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
