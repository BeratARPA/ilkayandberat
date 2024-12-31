// Music Control
const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.getElementById('musicStatus');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicStatus.textContent = 'Durdur';
    } else {
        music.play();
        musicStatus.textContent = 'Çalıyor';
    }
    isPlaying = !isPlaying;
});

// Heart Animation
const heartBtn = document.getElementById('heartBtn');
let heartClicks = 0;

heartBtn.addEventListener('click', () => {
    heartClicks++;
    heartBtn.style.transform = `scale(${1 + (heartClicks % 3) * 0.1})`;
    setTimeout(() => {
        heartBtn.style.transform = 'scale(1)';
    }, 300);
});

// Image Modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close')[0];

function openModal(img) {
    modal.style.display = 'block';
    modalImg.src = img.src;
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const newYear = new Date('2025-01-01T00:00:00');
    const diff = newYear - now;

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Love Button Animation
const loveButton = document.querySelector('.love-button');
loveButton.addEventListener('click', () => {
    loveButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        loveButton.style.transform = 'scale(1)';
    }, 200);
});