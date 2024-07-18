import axios from 'axios';

const API_KEY = '44899470-dc00d504e23887fc09aa8b920';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchImages(searchQuery, page, perPage) {
  const URL = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    searchQuery
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(URL);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.status : error.message);
  }
}
