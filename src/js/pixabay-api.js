import axios from 'axios';

const API_KEY = '44899470-dc00d504e23887fc09aa8b920';
const BASE_URL = 'https://pixabay.com/api/';

export const searchSettings = {
  q: '',
  page: 1,
  per_page: 15,
};

export async function searchImages(searchQuery, page, perPage) {
  const params = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
