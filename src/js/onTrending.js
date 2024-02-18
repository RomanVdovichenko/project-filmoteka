import { genresList, moviesApi } from "./search-query";
import { pagination } from "./pagination";
import { markup } from "./markup-card";
import Notiflix from 'notiflix';

const form = document.querySelector('#search-form');
const trendMovie = document.querySelector('.movies');
const errorSearch = document.querySelector('[data-error]')

export async function onTrending() {
    form.elements.searchQuery.value = '';
    errorSearch.classList.add('none');
    let page = 1;
    let totalPages = 0;
    try {
        const arrGenres = await genresList();
        const movies = await moviesApi(page);
        console.log(movies);
        if (movies.total_pages > 0) {
            Notiflix.Notify.info(`${movies.total_results} films found`);
            totalPages = movies.total_pages;
            trendMovie.innerHTML = markup(arrGenres, movies.results);
            pagination(page, totalPages, genresList, moviesApi);
        }
    }
    catch (err) {
        console.log(err);
    }
}