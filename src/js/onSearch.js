import { pagination } from './pagination';
import { markup } from './markup-card';
import { genresList, movieSearchApi } from './search-query';
import Notiflix from 'notiflix';

const searchBtn = document.querySelector('#search');
const form = document.querySelector('#search-form');
const paginationEl = document.querySelector('.pagination');
const trendMovie = document.querySelector('.movies');
const errorSeach = document.querySelector('[data-error]')

export async function onSearch(evt) {
    evt.preventDefault();
    searchBtn.setAttribute('disabled', '');
    let inputQuery = form.elements.searchQuery.value.trim();
    console.log(inputQuery);
    if (!inputQuery) {
        errorSeach.classList.remove('none');
        return
    }
    let page = 1;
    let totalPages = 0;
    try {
        const arrGenres = await genresList();
        const movies = await movieSearchApi(page, inputQuery);
        console.log(movies);
        if (movies.results.length === 0) {
            errorSeach.classList.remove('none');
            return
        }
        totalPages = movies.total_pages;
        Notiflix.Notify.info(`${movies.total_results} films found`);
        trendMovie.innerHTML = markup(arrGenres, movies.results);
        paginationEl.classList.remove('none');
        pagination(page, totalPages, genresList, movieSearchApi, inputQuery)
    }
    catch (err) {
        console.log(err);
    }
 };