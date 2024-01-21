
import { markup } from './js/markup-card';
import { onTrending } from './js/onTrending';

const trendMovie = document.querySelector('#trending');
const trendSearch = document.querySelector('#trend');
const logo = document.querySelector('#logo');
const form = document.querySelector('#search-form');
const searchBtn = document.querySelector('#search');
const errorSeach = document.querySelector('.header__error');
const paginationEl = document.querySelector('.pagination');

trendSearch.addEventListener('click', onTrending);
logo.addEventListener('click', onTrending);
form.addEventListener('input', onInput);
form.addEventListener('submit', onSearch);

onTrending();

function onInput() { 
    searchBtn.removeAttribute('disabled');
    trendMovie.innerHTML = '';
    errorSeach.classList.add('none');
    paginationEl.classList.add('none');
};

async function onSearch(evt) {
    evt.preventDefault();
    searchBtn.setAttribute('disabled', '');
    let inputQuery = form.elements.searchQuery.value.trim();
    console.log(inputQuery);
    if (!inputQuery) {
        errorSeach.classList.remove('none');
        return
    }

    try {
        const arr1 = await genresList();
        const arr2 = await movieSearchApi(inputQuery);
        console.log(arr2);
        if (arr2.results.length === 0) {
            errorSeach.classList.remove('none');
            return
        }
        trendMovie.innerHTML = markup(arr1, arr2.results);
        paginationEl.classList.remove('none');
    }
    catch (err) {
        console.log(err);
    }
 };