import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

export const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-button'),
};

export function createMarkup(arr, append = false) {
  const markup = arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" width="340" height="200"/>
      </a>
      <ul class="inform-container">
        <li class="inform-item">
          <h3 class="inform-title">Likes</h3>
          <p>${likes}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Views</h3>
          <p>${views}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Comments</h3>
          <p>${comments}</p>
        </li>
        <li class="inform-item">
          <h3 class="inform-title">Downloads</h3>
          <p>${downloads}</p>
        </li>
      </ul>
    </li>`
    )
    .join('');

  if (append) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
  } else {
    refs.galleryContainer.innerHTML = markup;
  }
}

export function showError(message) {
  iziToast.error({
    message: message || 'Sorry, an error occurred. Try again!',
    backgroundColor: '#ef4040',
    maxWidth: 432,
    timeout: 3000,
    messageColor: '#fafafb',
    messageSize: '16',
    theme: 'dark',
    progressBarColor: '#b51b1b',
    position: 'topRight',
  });
}

export function scrollCard() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
lightbox.on('show.simplelightbox', function () {});
