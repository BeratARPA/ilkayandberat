class PhysicsText {
    constructor() {
        this.subtitle = document.querySelector('.subtitle');
        this.isDragging = false;
        this.offset = { x: 0, y: 0 };
        this.position = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.lastPosition = { x: 0, y: 0 };
        this.gravity = 0.5;
        this.isActive = false;
        
        this.init();
    }

    init() {
        const rect = this.subtitle.getBoundingClientRect();
        this.position = {
            x: rect.left,
            y: rect.top
        };
        this.lastPosition = { ...this.position };

        this.subtitle.addEventListener('mousedown', (e) => {
            if (!this.isActive) {
                this.activate(e);
            } else {
                this.handleMouseDown(e);
            }
        });
    }

    activate(e) {
        this.isActive = true;
        
        // Orijinal pozisyonu ve boyutları al
        const rect = this.subtitle.getBoundingClientRect();
        
        // Mouse'un element üzerindeki pozisyonunu hesapla
        this.offset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
        // Yeni pozisyonu hesapla (mouse pozisyonundan offset'i çıkar)
        this.position = {
            x: e.clientX - this.offset.x,
            y: e.clientY - this.offset.y
        };
        
        // Stili güncelle
        this.subtitle.style.position = 'fixed';
        this.subtitle.style.left = `${this.position.x}px`;
        this.subtitle.style.top = `${this.position.y}px`;
        this.subtitle.style.cursor = 'grabbing';
        this.subtitle.style.zIndex = '10000';
        
        // Mouse olaylarını ekle
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));
        
        // Fizik döngüsünü başlat
        this.lastTime = performance.now();
        this.isDragging = true;
        requestAnimationFrame(this.update.bind(this));
    }

    handleMouseDown(e) {
        if (!this.isActive) return;
        
        this.isDragging = true;
        this.subtitle.style.cursor = 'grabbing';
        
        // Mouse'un elementin neresine tıkladığını hesapla
        const rect = this.subtitle.getBoundingClientRect();
        this.offset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
        // Hareketi sıfırla
        this.velocity = { x: 0, y: 0 };
        
        // Son pozisyonu güncelle
        this.lastPosition = { ...this.position };
    }

    handleMouseMove(e) {
        if (!this.isDragging) return;
        
        // Mouse pozisyonundan offset'i çıkararak yeni pozisyonu hesapla
        this.position = {
            x: e.clientX - this.offset.x,
            y: e.clientY - this.offset.y
        };
        
        this.updatePosition();
    }

    handleMouseUp() {
        if (this.isDragging) {
            this.isDragging = false;
            this.subtitle.style.cursor = 'grab';
            
            // Fırlatma hızını hesapla
            this.velocity = {
                x: (this.position.x - this.lastPosition.x) * 1.5,
                y: (this.position.y - this.lastPosition.y) * 1.5
            };
        }
    }

    update(currentTime) {
        if (!this.isActive) return;

        const deltaTime = (currentTime - this.lastTime) / 16;
        this.lastTime = currentTime;

        if (!this.isDragging) {
            // Pozisyonu kaydet
            this.lastPosition = { ...this.position };
            
            // Fizik hesaplamaları
            this.velocity.y += this.gravity * deltaTime;
            this.position.x += this.velocity.x * deltaTime;
            this.position.y += this.velocity.y * deltaTime;

            // Ekran sınırlarını kontrol et
            const rect = this.subtitle.getBoundingClientRect();
            if (this.position.y + rect.height > window.innerHeight) {
                this.position.y = window.innerHeight - rect.height;
                this.velocity.y = -this.velocity.y * 0.7;
            }
            if (this.position.y < 0) {
                this.position.y = 0;
                this.velocity.y = -this.velocity.y * 0.7;
            }
            if (this.position.x + rect.width > window.innerWidth) {
                this.position.x = window.innerWidth - rect.width;
                this.velocity.x = -this.velocity.x * 0.7;
            }
            if (this.position.x < 0) {
                this.position.x = 0;
                this.velocity.x = -this.velocity.x * 0.7;
            }

            // Sürtünme
            this.velocity.x *= 0.98;
            this.velocity.y *= 0.98;

            this.updatePosition();
        }

        requestAnimationFrame(this.update.bind(this));
    }

    updatePosition() {
        this.subtitle.style.left = `${this.position.x}px`;
        this.subtitle.style.top = `${this.position.y}px`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new PhysicsText();
}); 