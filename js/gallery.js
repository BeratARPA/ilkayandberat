function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    modalImg.src = img.src;
    modal.classList.add('show');
    
    // Scroll'u devre dışı bırak
    document.body.style.overflow = 'hidden';
}

// Modal'ı kapatma fonksiyonu
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('show');
    
    // Scroll'u tekrar aktif et
    document.body.style.overflow = 'auto';
}

// Modal dışına tıklandığında kapatma
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close butonuna tıklandığında kapatma
document.querySelector('.close').addEventListener('click', closeModal);

// ESC tuşu ile kapatma
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});