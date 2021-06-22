export default function getRefs() {
  return {
    moviesContainer: document.querySelector('#gallery'),
    logo: document.querySelector('.nav-logo'),
    homeBtn: document.querySelector('[data-index="home"]'),
    searchForm: document.querySelector('.film-search'),
    posterImage: document.querySelector('.movie-image'),
    lightBoxContainerRef: document.querySelector('.js-lightbox'),
    lightBoxCloseRef: document.querySelector('[data-action="close-lightbox"]'),
    lightBoxContentRef: document.querySelector('.lightbox__content'),
    backdropModal: document.querySelector('.js-lightbox'),
    spinner: document.querySelector('.spinner'),
    paginationElement: document.getElementById('pagination'),
    arrowLeft: document.querySelector('.arrow_left'),
    arrowRight: document.querySelector('.arrow_right'),
  };
}
