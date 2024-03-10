import { onPagination } from "./onPagination";

const start = document.querySelector('.pagination__startBtn');
const total = document.querySelector('.pagination__endBtn');
const decorStart = document.querySelector('.pagination__decorStart');
const decorEnd = document.querySelector('.pagination__decorEnd')
const list = document.querySelector('.pagination__list');
const backBtn = document.querySelector('#back');
const forwardBtn = document.querySelector('#forward');
const paginationEl = document.querySelector('.pagination');

paginationEl.addEventListener('click', onPagination);

export async function pagination({page, total_pages}, value) {
    paginationEl.classList.remove('none');
    paginationEl.setAttribute('name', value);
    if (total_pages <= 5) {
        list.innerHTML = '';
        for (let i = 1; i <= total_pages; i++) {
            const btnEl = document.createElement('button');
            btnEl.type = 'button';
            btnEl.textContent = `${i}`;
            btnEl.name = `${i}`;
            if (btnEl.textContent === `${page}`) {
                btnEl.classList.add('pagination__btn--active');
            }
            btnEl.classList.add('pagination__itemBtn');
            list.append(btnEl);
        }
        backBtn.classList.add('none');
        forwardBtn.classList.add('none');
        decorStart.classList.add('none');
        decorEnd.classList.add('none');
        start.classList.add('none');
        total.classList.add('none');
    }
    if (total_pages > 5) {
        list.innerHTML = '';
        if ((total_pages - page) > 5) {
            for (let i = page; i < page + 5; i++) {
                const btnEl = document.createElement('button');
                btnEl.type = 'button';
                btnEl.textContent = `${i}`;
                btnEl.name = `${i}`;
                if (btnEl.textContent === `${page}`) {
                    btnEl.classList.add('pagination__btn--active');
                }
            btnEl.classList.add('pagination__itemBtn');
            list.append(btnEl);
            }
            if (page === 1) {
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
            total.textContent = `${total_pages}`;
            total.name = `${total_pages}`;
        }
        if ((total_pages - page) <= 5) {
            for (let i = page; i <= total_pages; i++) {
                const btnEl = document.createElement('button');
                btnEl.type = 'button';
                btnEl.textContent = `${i}`;
                btnEl.name = `${i}`;
                if (btnEl.textContent === `${page}`) {
                    btnEl.classList.add('pagination__btn--active');
                }
                btnEl.classList.add('pagination__itemBtn');
                list.append(btnEl);
            }
            decorEnd.classList.add('none');
            total.classList.add('none');
            forwardBtn.classList.add('none');
            backBtn.classList.remove('none');
            decorStart.classList.remove('none');
        } 
    }
}