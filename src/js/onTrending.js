import { genresList, moviesApi } from "./search-query";
import { pagination } from "./pagination";
import { markup } from "./markup-card"; 

const form = document.querySelector('#search-form');
const trendMovie = document.querySelector('#trending');

export async function onTrending() {
    form.elements.searchQuery.value = '';
    let page = 1;
    let totalPages = 0;
    try {
        const arrGenres = await genresList();
        const movies = await moviesApi(page);
        console.log(movies);
        if (movies.total_pages > 0) {
            totalPages = movies.total_pages;
            trendMovie.innerHTML = markup(arrGenres, movies.results);
            pagination(page, totalPages, genresList, moviesApi);
        }
    }
    catch (err) {
        console.log(err);
    }
}