import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '32702004-1edcc94db1ad9191accf2fa0a';

const fetchSeting = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

const apiFetch = Object.entries(fetchSeting)
  .map(el => `${el[0]}=${el[1]}`)
  .join('&');

export const addImages = async (querty, page) => {
  const respons = await axios.post(`?q=${querty}&page=${page}&${apiFetch}`);

  if (!respons.data.hits.length) {
    throw new Error('Nothing found');
  }

  return respons.data;
};
