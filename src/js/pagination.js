import { markup } from "./markup-card";
import { movieSearchApi } from "./search-query";

const start = document.querySelector('.pagination__start');
const decorStart = document.querySelector('.pagination__decorStart');
const list = document.querySelector('.pagination__list');
const total = document.querySelector('.pagination__end');
const backBtn = document.querySelector('#back');
const trendMovie = document.querySelector('#trending');
const paginationEl = document.querySelector('.pagination');
const form = document.querySelector('#search-form');
const home = document.querySelector('#trend');
const logo = document.querySelector('#logo');

export async function pagination(page, totalPages, f1, f2, input = "") {
    paginationEl.classList.remove('none');
    if (page === 1) {
        list.innerHTML = '';
        for (let i = page; i < page + 5; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = `${i}`;
            if (liEl.textContent === `${page}`) {
                liEl.classList.add('pagination__item--active');
            }
            liEl.classList.add('pagination__item');
            list.append(liEl);
        }
        backBtn.classList.add('none');
        decorStart.classList.add('none');
        start.classList.add('none');
        total.textContent = `${totalPages}`;
        paginationEl.addEventListener('click', onPagination);
    }
    form.addEventListener('input', () => paginationEl.removeEventListener('click', onPagination));
    if (f2 === movieSearchApi) {
        home.addEventListener('click', () => paginationEl.removeEventListener('click', onPagination));
        logo.addEventListener('click', () => paginationEl.removeEventListener('click', onPagination));
    }
    async function onPagination(evt) {
        console.log(evt.target.id);
        if (evt.target.id !== 'forward' && evt.target.id !== 'right' && evt.target.id !== 'back' && evt.target.id !== 'left') {
            return
        }
        if (evt.target.id === 'forward' || evt.target.id === 'right') {
            page += 1;
            backBtn.classList.remove('none');
            backBtn.removeAttribute('disabled');
            start.classList.remove('none');
            decorStart.classList.remove('none');
            list.innerHTML = '';
        }
        if ((evt.target.id === 'back' || evt.target.id === 'left') && page > 1) {
            page -= 1;
            list.innerHTML = '';
        }
        try {
            const arrGenres = await f1();
            const movies = await f2(page, input);
            console.log(movies);
            trendMovie.innerHTML = markup(arrGenres, movies.results);
            list.innerHTML = '';
            if (page === 1) {
                backBtn.classList.add('none');
                decorStart.classList.add('none');
                start.classList.add('none');
                total.textContent = `${totalPages}`;
                list.innerHTML = '';
            }
            for (let i = page; i < page + 5; i++) {
                const liEl = document.createElement('li');
                liEl.textContent = `${i}`;
                if (liEl.textContent === `${page}`) {
                    liEl.classList.add('pagination__item--active');
                }
                liEl.classList.add('pagination__item');
                list.append(liEl);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
