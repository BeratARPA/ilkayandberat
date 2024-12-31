document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicStatus = document.getElementById('musicStatus');
    const musicControl = document.querySelector('.music-control');
    
    if (music && musicToggle && musicStatus && musicControl) {
        let isPlaying = false;

        // Initialize music popup
        new Popup(musicToggle, musicControl, 'right-top');

        musicToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isPlaying) {
                music.pause();
                musicStatus.textContent = 'Durdur';
            } else {
                music.play();
                musicStatus.textContent = 'Çalıyor';
            }
            isPlaying = !isPlaying;
        });
    }
});