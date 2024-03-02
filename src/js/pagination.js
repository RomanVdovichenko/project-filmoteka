import { onSearch } from "./onSearch";
import { onTrending } from "./onTrending";

const start = document.querySelector('.pagination__start');
const decorStart = document.querySelector('.pagination__decorStart');
const decorEnd = document.querySelector('.pagination__decorEnd')
const list = document.querySelector('.pagination__list');
const total = document.querySelector('.pagination__end');
const backBtn = document.querySelector('#back');
const forwardBtn = document.querySelector('#forward');
const paginationEl = document.querySelector('.pagination');

paginationEl.addEventListener('click', onPagination);

export async function pagination(obj, value) {
    paginationEl.classList.remove('none');
    paginationEl.setAttribute('name', value);
    if (obj.total_pages <= 5) {
        list.innerHTML = '';
        for (let i = 1; i <= obj.total_pages; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = `${i}`;
            if (liEl.textContent === `${obj.page}`) {
                liEl.classList.add('pagination__item--active');
            }
            liEl.classList.add('pagination__item');
            list.append(liEl);
        }
        backBtn.classList.add('none');
        forwardBtn.classList.add('none');
        decorStart.classList.add('none');
        decorEnd.classList.add('none');
        start.classList.add('none');
        total.classList.add('none');
    }
    if (obj.total_pages > 5) {
        list.innerHTML = '';
        if ((obj.total_pages - obj.page) > 5) {
           for (let i = obj.page; i < obj.page + 5; i++) {
            const liEl = document.createElement('li');
            liEl.textContent = `${i}`;
            if (liEl.textContent === `${obj.page}`) {
                liEl.classList.add('pagination__item--active');
            }
            liEl.classList.add('pagination__item');
            list.append(liEl);
            }
            if (obj.page === 1) {
                backBtn.classList.add('none');
                start.classList.add('none');
                decorStart.classList.add('none');
            } else {
                backBtn.classList.remove('none');
                start.classList.remove('none');
                decorStart.classList.remove('none');
            }
            decorEnd.classList.remove('none');
            total.classList.remove('none');
            forwardBtn.classList.remove('none');
            total.textContent = `${obj.total_pages}`;
        }
        if ((obj.total_pages - obj.page) <= 5) {
            for (let i = obj.page; i <= obj.total_pages; i++) {
                const liEl = document.createElement('li');
                liEl.textContent = `${i}`;
                if (liEl.textContent === `${obj.page}`) {
                    liEl.classList.add('pagination__item--active');
                }
                liEl.classList.add('pagination__item');
                list.append(liEl);
            }
            decorEnd.classList.add('none');
            total.classList.add('none');
            // forwardBtn.classList.add('none');
        } 
    }
}

let page = 1;
let trend = 0;
async function onPagination(evt) {
    console.log(evt.target.id);
    console.log(paginationEl.getAttribute('name'));
    
    if (evt.target.id === 'forward' || evt.target.id === 'right') {
        page += 1;
    }
    if ((evt.target.id === 'back' || evt.target.id === 'left') && page > 1) {
        page -= 1;
    }
    if (paginationEl.getAttribute('name') === 'trend') {
        trend += 1;
        onTrending(page);
    }
    if (paginationEl.getAttribute('name') === 'search') {
        if (trend !== 0) {
            trend = 0;
            page = 1;
        }
        onSearch(evt, page);
    }
}