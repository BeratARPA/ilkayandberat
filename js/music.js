let player;
let isMuted = false;

// YouTube API hazır olduğunda çağrılacak fonksiyon
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '0',
        width: '0',
        videoId: 'e5Rnzp1WW8g', // Yeni video ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'e5Rnzp1WW8g' // Döngü için aynı ID tekrar kullanılmalı
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Player hazır olduğunda çağrılacak fonksiyon
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(50); // Ses seviyesini 50% olarak ayarla
}

// Player durumu değiştiğinde çağrılacak fonksiyon
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo(); // Video bittiğinde tekrar başlat
    }
}

// Müzik kontrol butonu için event listener
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('.music-icon');

    musicToggle.addEventListener('click', function() {
        if (player && typeof player.getPlayerState === 'function') {
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
                musicIcon.textContent = '🔇';
                isMuted = true;
            } else {
                player.playVideo();
                musicIcon.textContent = '🔊';
                isMuted = false;
            }
        }
    });
});