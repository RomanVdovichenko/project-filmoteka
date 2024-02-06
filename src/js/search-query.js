import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org';
const apiKey = '13896f610c2b15042c451786ce84a901';

export const moviesApi = async(page) => {
    const respons = await axios.get(`/3/trending/movie/day?api_key=${apiKey}&page=${page}`);
    return respons.data;
}

export const genresList = async () => {
    const resp = await axios.get(`/3/genre/movie/list?api_key=${apiKey}`);
    return resp.data.genres;
}

export const moviePageApi = async (id) => {
    const respons = await axios.get(`/3/movie/${id}?api_key=${apiKey}`);
    return respons.data;
}

export const movieCastApi = async (id) => {
    const respons = await axios.get(`/3/movie/${id}/credits?api_key=${apiKey}`);
    return respons.data.cast;
}

export const movieReviewsApi = async (id) => {
    const respons = await axios.get(`/3/movie/${id}/reviews?api_key=${apiKey}`);
    return respons.data.results;
}

export const movieSearchApi = async (page, search) => {
    const respons = await axios.get(`/3/search/movie?api_key=${apiKey}&query=${search}&page=${page}`);
    return respons.data;
}

// &append_to_response=videos,images
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg