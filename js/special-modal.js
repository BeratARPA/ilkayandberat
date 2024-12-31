class SpecialModal {
    constructor() {
        this.title = document.getElementById('specialTitle');
        this.modal = document.getElementById('specialModal');
        this.closeBtn = this.modal.querySelector('.close-special');
        this.init();
    }

    init() {
        // Başlığa tıklandığında
        this.title.addEventListener('click', () => this.openModal());
        
        // Kapatma butonuna tıklandığında
        this.closeBtn.addEventListener('click', () => this.closeModal());
        
        // Modal dışına tıklandığında
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // ESC tuşuna basıldığında
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    openModal() {
        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SpecialModal();
}); 