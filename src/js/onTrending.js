import { genresList, moviesApi } from "./search-query";
import { pagination } from "./pagination";
import { markup } from "./markup-card";
import Notiflix from 'notiflix';

const form = document.querySelector('#search-form');
const trendMovie = document.querySelector('.movies');
const errorSearch = document.querySelector('[data-error]')
// const obj = {
//     page: 4,
//     total_pages: 50
// }

export async function onTrending(page = 1) {
    const name = 'trend';
    form.elements.searchQuery.value = '';
    errorSearch.classList.add('none');
    try {
        const arrGenres = await genresList();
        const movies = await moviesApi(page);
        console.log(movies);
        if (movies.total_pages > 0) {
            if (movies.page === 1) {
               Notiflix.Notify.info(`${movies.total_results} films found`); 
            }
            trendMovie.innerHTML = markup(arrGenres, movies.results);
            pagination(movies, name);
            // pagination(obj, name);
        }
    }
    catch (err) {
        console.log(err);
    }
}