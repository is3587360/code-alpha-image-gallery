function showimage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboximg = document.getElementById('lightbox-img');
    lightboximg.src = src;
    lightbox.style.display = 'flex';
    
}

function  closelightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
}