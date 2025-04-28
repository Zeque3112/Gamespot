document.addEventListener('DOMContentLoaded', () => {
    const noticias = document.querySelectorAll('.noticia');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showNoticia(index) {
        noticias.forEach(noticia => noticia.classList.remove('activa'));
        noticias[index].classList.add('activa');
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : noticias.length - 1;
        showNoticia(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < noticias.length - 1) ? currentIndex + 1 : 0;
        showNoticia(currentIndex);
    });
});