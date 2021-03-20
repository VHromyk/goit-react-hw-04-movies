import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = 'bf08c0c07642287cbabe383c02818eb3';

const fetchCast = id => {
  return axios.get(`3/movie/${id}/credits?api_key=${API_KEY}`);
};

const fetchReviews = id => {
  return axios.get(`3/movie/${id}/reviews?api_key=${API_KEY}`);
};

const fetchTrendingMovies = () => {
  return axios.get(`3/trending/movie/day?api_key=${API_KEY}`);
};

const fetchMoviesPage = query => {
  return axios.get(`3/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
};

const fetchMoviesDetailsPage = id => {
  return axios.get(`3/movie/${id}?api_key=${API_KEY}`);
};

const api = {
  fetchCast,
  fetchReviews,
  fetchTrendingMovies,
  fetchMoviesPage,
  fetchMoviesDetailsPage,
};

export default api;
