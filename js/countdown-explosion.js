class CountdownExplosion {
    constructor() {
        this.countdownItems = document.querySelectorAll('.countdown-item');
        this.particles = ['💥', '✨', '💫', '⭐', '🌟', '🎇', '🎆', '🔥'];
        this.init();
    }

    init() {
        this.countdownItems.forEach(item => {
            item.addEventListener('click', () => this.createExplosion());
        });
    }

    createExplosion() {
        // Patlama container'ı oluştur
        const container = document.createElement('div');
        container.className = 'explosion-container';
        document.body.appendChild(container);

        // Sayfaya patlama efekti ver
        document.body.classList.add('page-explosion');

        // 50 parçacık oluştur
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                this.createParticle(container);
            }, i * 20);
        }

        // Container'ı ve sayfa efektini temizle
        setTimeout(() => {
            container.remove();
            document.body.classList.remove('page-explosion');
        }, 2000);
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        
        // Rastgele bir parçacık seç
        particle.textContent = this.particles[Math.floor(Math.random() * this.particles.length)];
        
        // Merkez pozisyon
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Rastgele hareket yönü
        const angle = Math.random() * Math.PI * 2; // 0-360 derece
        const distance = 100 + Math.random() * 300; // 100-400px arası
        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;
        const rotation = Math.random() * 720 - 360; // -360 ile 360 derece arası
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.setProperty('--moveX', `${moveX}px`);
        particle.style.setProperty('--moveY', `${moveY}px`);
        particle.style.setProperty('--rotation', `${rotation}deg`);
        
        container.appendChild(particle);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CountdownExplosion();
}); 