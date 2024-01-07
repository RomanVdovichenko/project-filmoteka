import {moviesApi, genresList, movieSearchApi} from './js/search-query';
import { markup } from './js/markup-card';

let page = 1;


const trendMovie = document.querySelector('#trending');
const trendSearch = document.querySelector('#trend');
const form = document.querySelector('#search-form');
const searchBtn = document.querySelector('#search');
const errorSeach = document.querySelector('.header__error');

trendSearch.addEventListener('click', onTrending);
form.addEventListener('input', onInput);
form.addEventListener('submit', onSearch);

async function onTrending() {
    form.elements.searchQuery.value = '';
    try {
        const arr1 = await genresList();
        const arr2 = await moviesApi(page);
        trendMovie.innerHTML = markup(arr1, arr2);
    }
    catch (err) {
        console.log(err);
    }
}

onTrending();

function onInput() { 
    searchBtn.removeAttribute('disabled');
    trendMovie.innerHTML = '';
    errorSeach.classList.add('none');
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
        trendMovie.innerHTML = markup(arr1, arr2);
    }
    catch (err) {
        console.log(err);
    }
 };

