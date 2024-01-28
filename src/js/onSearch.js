import { pagination } from './pagination';
import { markup } from './markup-card';
import { genresList, movieSearchApi } from './search-query';

const searchBtn = document.querySelector('#search');
const form = document.querySelector('#search-form');
const paginationEl = document.querySelector('.pagination');
const trendMovie = document.querySelector('#trending');

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
        const arr1 = await genresList();
        const arr2 = await movieSearchApi(page, inputQuery);
        console.log(arr2);
        if (arr2.results.length === 0) {
            errorSeach.classList.remove('none');
            return
        }
        totalPages = arr2.total_pages;
        trendMovie.innerHTML = markup(arr1, arr2.results);
        paginationEl.classList.remove('none');
        pagination(page, totalPages, genresList, movieSearchApi, inputQuery)
    }
    catch (err) {
        console.log(err);
    }
 };