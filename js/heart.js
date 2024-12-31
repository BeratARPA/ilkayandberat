class Heart {
    constructor() {
        this.heartBtn = document.getElementById('heartBtn');
        this.init();
    }

    init() {
        this.heartBtn.addEventListener('click', () => this.createHearts());
    }

    createHearts() {
        // 50 adet kalp oluştur
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerHTML = '❤️';
                
                // Rastgele başlangıç pozisyonu
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.top = Math.random() * 100 + 'vh';
                
                document.body.appendChild(heart);

                // Animasyon bitince elementi kaldır
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 50); // Her kalp arasında küçük gecikme
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new Heart();
});