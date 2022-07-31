import axios from 'axios';
// ссылочка https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// ключик 9c596d0a0c0e277ef870e9f34838eddd

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=9c596d0a0c0e277ef870e9f34838eddd`);
  return results;
};

export const getMovie = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=9c596d0a0c0e277ef870e9f34838eddd`);
  return data;
};

export const getSearchMovie = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=9c596d0a0c0e277ef870e9f34838eddd&query=${query}
`);
  return results;
};

export const getReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US`);
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=9c596d0a0c0e277ef870e9f34838eddd&language=en-US`);
  return data;
};