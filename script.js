// 照片集合（存儲在本地存儲中）
let photos = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadPhotos();
    setupEventListeners();
});

// 設置事件監聽器
function setupEventListeners() {
    const photoForm = document.getElementById('photoForm');
    const contactForm = document.getElementById('contactForm');

    if (photoForm) {
        photoForm.addEventListener('submit', handlePhotoUpload);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// 處理照片上傳
function handlePhotoUpload(e) {
    e.preventDefault();

    const title = document.getElementById('photoTitle').value;
    const description = document.getElementById('photoDescription').value;
    const fileInput = document.getElementById('photoFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('請選擇一張照片');
        return;
    }

    // 讀取檔案
    const reader = new FileReader();
    reader.onload = function(event) {
        const photo = {
            id: Date.now(),
            title: title,
            description: description,
            image: event.target.result, // Base64 編碼的圖像
            date: new Date().toLocaleDateString('zh-TW')
        };

        photos.push(photo);
        savePhotos();
        displayPhotos();
        
        // 重置表單
        document.getElementById('photoForm').reset();
        alert('照片已成功上傳！');
    };
    reader.readAsDataURL(file);
}

// 保存照片到本地存儲
function savePhotos() {
    // 注意：本地存儲有大小限制（通常為 5-10 MB）
    try {
        localStorage.setItem('baseballPhotos', JSON.stringify(photos));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            alert('存儲空間已滿，無法保存更多照片。請刪除一些舊照片。');
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

// 顯示照片集
function displayPhotos() {
    const gallery = document.getElementById('photoGallery');
    
    if (photos.length === 0) {
        gallery.innerHTML = '<p class="no-photos">暫時還沒有照片。上傳第一張照片吧！</p>';
        return;
    }

    gallery.innerHTML = photos.map(photo => `
        <div class="photo-card">
            <img src="${photo.image}" alt="${photo.title}">
            <div class="photo-card-content">
                <h3>${photo.title}</h3>
                <p>${photo.description}</p>
                <div class="photo-date">上傳日期：${photo.date}</div>
                <button class="delete-btn" onclick="deletePhoto(${photo.id})">刪除</button>
            </div>
        </div>
    `).join('');
}

// 刪除照片
function deletePhoto(id) {
    if (confirm('確定要刪除這張照片嗎？')) {
        photos = photos.filter(photo => photo.id !== id);
        savePhotos();
        displayPhotos();
        alert('照片已刪除');
    }
}

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
