// Snow animation configuration
const snowConfig = {
    particleCount: 50,
    speed: 1,
    wind: 0.5,
    size: 3
};

class Snow {
    constructor() {
        this.particles = [];
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.init();
    }

    init() {
        // Setup canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        document.body.appendChild(this.canvas);

        // Create particles
        for (let i = 0; i < snowConfig.particleCount; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * snowConfig.size + 2,
                speed: Math.random() * snowConfig.speed + 0.5
            });
        }

        // Handle resize
        window.addEventListener('resize', () => this.handleResize());
        this.handleResize();
        
        // Start animation
        this.animate();
    }

    handleResize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            this.ctx.fill();

            // Update position
            particle.y += particle.speed;
            particle.x += Math.sin(particle.y * 0.01) * snowConfig.wind;

            // Reset position if out of bounds
            if (particle.y > window.innerHeight) {
                particle.y = -10;
                particle.x = Math.random() * window.innerWidth;
            }
            if (particle.x > window.innerWidth) {
                particle.x = 0;
            } else if (particle.x < 0) {
                particle.x = window.innerWidth;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}