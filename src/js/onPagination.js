import { onSearch } from "./onSearch";
import { onTrending } from "./onTrending";

const paginationEl = document.querySelector('.pagination');

let page = 1;
let trend = 0;
export async function onPagination(evt) {
    if (evt.target.className === 'pagination__itemBtn') {
        page = Number(evt.target.name);
    }
    if (evt.target.className === 'pagination__startBtn') {
        page = 1;
    }
    if (evt.target.className === 'pagination__endBtn') {
        page = Number(evt.target.name);
    }
    if (evt.target.id === 'forward' || evt.target.id === 'right') {
        page += 5;
    }
    if ((evt.target.id === 'back' || evt.target.id === 'left') && page > 5) {
        page -= 5;
    } else if ((evt.target.id === 'back' || evt.target.id === 'left') && page <= 5) { 
        page = 1;
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