import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const list = document.querySelector('.gallery');

export function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="340"
          height="200"
        />
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
}

export function showError(message) {
  return iziToast.error({
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

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

lightbox.on('show.simplelightbox', function () {});
