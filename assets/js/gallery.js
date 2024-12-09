// Selección de los elementos
const portfolioItems = document.querySelectorAll('.portfolio-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Para abrir la imagen en el lightbox
portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const imgSrc = e.target.src;
        lightbox.style.display = 'flex';
        lightboxImg.src = imgSrc;
    });
});

// Para cerrar el lightbox al hacer clic en la X
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Para cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
