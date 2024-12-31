class GiftExplosion {
    constructor() {
        this.footerNames = document.querySelector('.footer-names');
        this.gifts = ['🎁', '🎀', '🎈', '🎊', '🎉', '💝', '💖', '🌟'];
        this.init();
    }

    init() {
        this.footerNames.addEventListener('click', () => this.createGiftExplosion());
    }

    createGiftExplosion() {
        // Her tıklamada 30 hediye oluştur
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                this.createSingleGift();
            }, i * 50);
        }
    }

    createSingleGift() {
        const gift = document.createElement('div');
        gift.className = 'gift';
        
        // Rastgele bir hediye emojisi seç
        gift.textContent = this.gifts[Math.floor(Math.random() * this.gifts.length)];
        
        // Başlangıç pozisyonu (footer'ın ortası)
        const footerRect = this.footerNames.getBoundingClientRect();
        const startX = footerRect.left + footerRect.width / 2;
        const startY = footerRect.top + footerRect.height / 2;
        
        // Rastgele hareket yönü ve rotasyon
        const moveX = (Math.random() - 0.5) * 400; // -200px ile 200px arası
        const moveY = -Math.random() * 400; // Yukarı doğru -400px'e kadar
        const rotation = Math.random() * 720 - 360; // -360 ile 360 derece arası
        
        gift.style.left = startX + 'px';
        gift.style.top = startY + 'px';
        gift.style.setProperty('--moveX', `${moveX}px`);
        gift.style.setProperty('--moveY', `${moveY}px`);
        gift.style.setProperty('--rotation', `${rotation}deg`);
        
        document.body.appendChild(gift);
        
        // Animasyon bitince elementi kaldır
        setTimeout(() => {
            gift.remove();
        }, 1500);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new GiftExplosion();
}); 