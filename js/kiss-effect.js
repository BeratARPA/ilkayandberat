class KissEffect {
    constructor() {
        this.title = document.querySelector('header h1');
        this.kisses = ['💋', '😘', '💝'];
        this.stars = ['⭐', '✨', '💫', '🌟'];
        this.init();
    }

    init() {
        this.title.addEventListener('click', () => this.createKissExplosion());
    }

    createKissExplosion() {
        // 20 öpücük oluştur
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createKiss();
            }, i * 50);
        }
    }

    createKiss() {
        const kiss = document.createElement('div');
        kiss.className = 'kiss';
        
        // Rastgele bir öpücük emojisi seç
        kiss.textContent = this.kisses[Math.floor(Math.random() * this.kisses.length)];
        
        // Rastgele pozisyon
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        
        kiss.style.left = x + 'px';
        kiss.style.top = y + 'px';
        kiss.style.setProperty('--rotation', `${rotation}deg`);
        
        document.body.appendChild(kiss);

        // Öpücük patladığında yıldızlar oluştur
        setTimeout(() => {
            this.createStars(x, y);
        }, 800);
        
        // Animasyon bitince elementi kaldır
        setTimeout(() => {
            kiss.remove();
        }, 1500);
    }

    createStars(x, y) {
        // Her öpücük için 4 yıldız oluştur
        for (let i = 0; i < 4; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.textContent = this.stars[Math.floor(Math.random() * this.stars.length)];
            
            // Yıldızların dağılma yönü
            const angle = (i * 90) + Math.random() * 45; // 4 farklı yöne dağılım
            const distance = 50 + Math.random() * 50; // 50-100px arası dağılım
            const moveX = Math.cos(angle * Math.PI / 180) * distance;
            const moveY = Math.sin(angle * Math.PI / 180) * distance;
            
            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.setProperty('--moveX', `${moveX}px`);
            star.style.setProperty('--moveY', `${moveY}px`);
            
            document.body.appendChild(star);
            
            // Yıldız animasyonu bitince elementi kaldır
            setTimeout(() => {
                star.remove();
            }, 1000);
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new KissEffect();
}); 