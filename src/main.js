import {
  refs,
  showError,
  scrollCard,
  createMarkup,
  lightbox,
} from './js/render-functions';
import { searchImages, searchSettings } from './js/pixabay-api';
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

refs.searchForm.addEventListener('submit', handlerSearchButton);
refs.loadMoreBtn.addEventListener('click', loadMoreImages);

let currentPage;
let totalPage;

async function handlerSearchButton(event) {
  event.preventDefault();

  const searchQuery = event.target.query.value.trim();
  if (!searchQuery) {
    showError('Enter data to search');
    return;
  }

  searchSettings.q = searchQuery;
  searchSettings.page = 1;

  refs.galleryContainer.innerHTML = '';
  refs.loadMoreBtn.classList.remove('visible');
  refs.loader.classList.add('visible');

  try {
    const data = await searchImages(
      searchQuery,
      searchSettings.page,
      searchSettings.per_page
    );
    totalPage = Math.ceil(data.totalHits / searchSettings.per_page);

    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    createMarkup(data.hits);
    lightbox.refresh();

    if (totalPage > searchSettings.page) {
      refs.loadMoreBtn.classList.add('visible');
      setTimeout(() => {
        refs.loadMoreBtn.classList.add('fade-in');
      }, 3000);
    }
  } catch (err) {
    showError(err.message);
  } finally {
    refs.loader.classList.remove('visible');
    refs.searchForm.reset();
  }
}

async function loadMoreImages() {
  refs.loader.classList.add('visible');
  refs.loadMoreBtn.classList.remove('visible');

  searchSettings.page += 1;
  try {
    const data = await searchImages(
      searchSettings.q,
      searchSettings.page,
      searchSettings.per_page
    );
    createMarkup(data.hits, true);
    lightbox.refresh();
    scrollCard();

    if (totalPage === searchSettings.page) {
      refs.loadMoreBtn.classList.remove('visible');
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
    } else {
      refs.loadMoreBtn.classList.add('visible');
    }
  } catch (err) {
    showError(err.message);
  } finally {
    refs.loader.classList.remove('visible');
  }
}
