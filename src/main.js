import { showError, createMarkup, list, lightbox } from './js/render-functions';
import { searchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 2500,
  resetOnHover: true,
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  titleSize: '16px',
  titleColor: '#fff',
  titleLineHeight: '1.5',
  messageSize: '16px',
  messageLineHeight: '1.5',
  backgroundColor: 'rgba(255, 182, 66, 0.8)',
});

let searchQuery = '';
let page = 1;
const perPage = 15;

const form = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');
const galleryContainer = document.querySelector('.gallery');
const loadButton = document.querySelector('.load-button');

form.addEventListener('submit', handlerAddSearch);
loadButton.addEventListener('click', loadMoreImages);

async function handlerAddSearch(event) {
  event.preventDefault();

  searchQuery = event.currentTarget.elements.query.value.trim();

  if (searchQuery === '') {
    list.innerHTML = '';
    return showError('Enter data to search');
  }

  list.innerHTML = '';
  page = 1;
  loader.classList.remove('hidden');
  loadButton.classList.add('hidden');

  try {
    const data = await searchImages(searchQuery, page, perPage);
    console.log('API Response:', data);

    if (data.hits.length === 0) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }

    const markup = createMarkup(data.hits);
    galleryContainer.innerHTML = markup;
    lightbox.refresh();
    loadButton.classList.remove('hidden');

    if (data.hits.length < perPage || data.totalHits <= page * perPage) {
      loadButton.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
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
  } catch (err) {
    showError(err.message);
  } finally {
    loader.classList.add('hidden');
  }

  inputForm.reset();
}

async function loadMoreImages() {
  page += 1;
  loader.classList.remove('hidden');
  loadButton.classList.add;

  try {
    const data = await searchImages(searchQuery, page, perPage);
    console.log('API Response:', data);

    const markup = createMarkup(data.hits);
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    loadButton.classList.remove('hidden');

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    if (data.hits.length < perPage || data.totalHits <= page * perPage) {
      loadButton.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
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
  } catch (err) {
    showError(err.message);
  } finally {
    loader.classList.add('hidden');
  }
}
