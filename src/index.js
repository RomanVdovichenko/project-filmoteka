
import { onTrending } from './js/onTrending';
import { onSearch } from './js/onSearch';
import { onInput } from './js/onInput';

const home = document.querySelector('#trend');
const logo = document.querySelector('#logo');
const form = document.querySelector('#search-form');
let c = 0;

if (c === 0) {
    c += 1;
    onTrending();
}
console.log(c);
form.addEventListener('input', () => {
    if (c !== 0) { c = 0 };
    onInput();
});
form.addEventListener('submit', onSearch);
home.addEventListener('click', () => {
    if (c === 0) {
    c += 1;
    onTrending();
}
});
logo.addEventListener('click', () => {
    if (c === 0) {
    c += 1;
    onTrending();
}
});
