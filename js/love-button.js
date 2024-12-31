class LoveButton {
    constructor() {
        this.loveBtn = document.querySelector('.love-button');
        this.init();
    }

    init() {
        this.loveBtn.addEventListener('click', () => this.createExplodingHeart());
    }

    createExplodingHeart() {
        // Büyük kalp oluştur
        const heart = document.createElement('div');
        heart.classList.add('exploding-heart');
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);

        // Animasyon bitince elementi kaldır
        setTimeout(() => {
            heart.remove();
        }, 1500); // 1.5 saniye sonra (animasyon süresi kadar)

        // Butonu geçici olarak devre dışı bırak
        this.loveBtn.disabled = true;
        setTimeout(() => {
            this.loveBtn.disabled = false;
        }, 1500);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new LoveButton();
}); 