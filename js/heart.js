document.addEventListener('DOMContentLoaded', () => {
    const heartBtn = document.getElementById('heartBtn');
    
    if (heartBtn) {
        let heartClicks = 0;

        heartBtn.addEventListener('click', () => {
            heartClicks++;
            heartBtn.style.transform = `scale(${1 + (heartClicks % 3) * 0.1})`;
            setTimeout(() => {
                heartBtn.style.transform = 'scale(1)';
            }, 300);
        });
    }
});