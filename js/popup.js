class Popup {
    constructor(trigger, content, position = 'right-top') {
        this.trigger = trigger;
        this.content = content;
        this.position = position;
        this.isOpen = false;
        this.init();
    }

    init() {
        this.content.style.display = 'none';
        this.content.classList.add('popup');
        this.content.classList.add(this.position);
        
        this.trigger.addEventListener('click', () => this.toggle());
        
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.content.contains(e.target) && !this.trigger.contains(e.target)) {
                this.close();
            }
        });
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.content.style.display = 'block';
        this.isOpen = true;
    }

    close() {
        this.content.style.display = 'none';
        this.isOpen = false;
    }
}