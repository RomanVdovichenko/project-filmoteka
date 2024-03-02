import { pagination } from './pagination';
import { markup } from './markup-card';
import { genresList, movieSearchApi } from './search-query';
import Notiflix from 'notiflix';

const searchBtn = document.querySelector('#search');
const form = document.querySelector('#search-form');
const trendMovie = document.querySelector('.movies');
const errorSearch = document.querySelector('[data-error]')

export async function onSearch(evt, page = 1) {
    evt.preventDefault();
    searchBtn.setAttribute('disabled', '');
    let inputQuery = form.elements.searchQuery.value.trim();
    console.log(inputQuery);
    const name = 'search';
    if (!inputQuery) {
        errorSearch.classList.remove('none');
        return
    }
    try {
        const arrGenres = await genresList();
        const movies = await movieSearchApi(page, inputQuery);
        console.log(movies);
        if (movies.results.length === 0) {
            errorSearch.classList.remove('none');
            return
        }
        if (movies.page === 1) {
            Notiflix.Notify.info(`${movies.total_results} films found`);
        }
        totalPages = movies.total_pages;
        trendMovie.innerHTML = markup(arrGenres, movies.results);
        pagination(movies, name);
    }
    catch (err) {
        console.log(err);
    }
 };