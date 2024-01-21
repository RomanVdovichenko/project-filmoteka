import { markup } from "./markup-card";

const start = document.querySelector('.pagination__start');
const decorStart = document.querySelector('.pagination__decorStart');
const list = document.querySelector('.pagination__list');
const total = document.querySelector('.pagination__end');
const backBtn = document.querySelector('#back');
const trendMovie = document.querySelector('#trending');

export async function pagination(page, totalPages, f1, f2) {
    try {
        if (page !== 1) {
            const arrGenres = await f1();
            const movies = await f2(page);
            console.log(movies);
            trendMovie.innerHTML = markup(arrGenres, movies.results);
        }
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
    }
    catch (err) {
        console.log(err);
    }
        const forwardBtn = document.querySelector('.pagination');
        forwardBtn.addEventListener('click', onPagination);
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
            if(page === 1) {
                backBtn.classList.add('none');
                decorStart.classList.add('none');
                start.classList.add('none');
                total.textContent = `${totalPages}`;
                list.innerHTML = '';
            }
        }
    }