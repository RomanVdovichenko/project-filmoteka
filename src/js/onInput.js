
const trendMovie = document.querySelector('.movies');
const searchBtn = document.querySelector('#search');
const errorSeach = document.querySelector('[data-error]');
const paginationEl = document.querySelector('.pagination');
const form = document.querySelector('#search-form');

export function onInput() { 
    searchBtn.removeAttribute('disabled');
    trendMovie.innerHTML = '';
    errorSeach.classList.add('none');
    paginationEl.classList.add('none');
    console.log(form.elements.searchQuery.value);
};