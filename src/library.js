import { markupLib } from "./js/markup-lib";
import { modalLib } from "./js/modal-lib";
import store from "./js/store";

const watchedBtn = document.querySelector('[data-watched]');
const queueBtn = document.querySelector('[data-queue]');
const gallery = document.querySelector('[data-library]');
let click;
let count = 0;

if (count === 0) {
    count += 1;
    onWatched();
}


watchedBtn.addEventListener('click', () => {
    if (count === 0) {
        count += 1;
        onWatched();
    }
});
queueBtn.addEventListener('click', () => {
    if (count !== 0) {
        count = 0;
        onQueue();
    }
});

function onWatched() {
    click = 'watched';
    watchedBtn.classList.add('activeBtn');
    queueBtn.classList.remove('activeBtn');
    const watchedList = store.load('watched') || [];
    if (watchedList.length === 0) {
        gallery.innerHTML = '';
        watchedBtn.removeEventListener('click', onWatched);
        return
    } 
    gallery.innerHTML = markupLib(watchedList);
 };

function onQueue() {
    click = 'queue';
    queueBtn.classList.add('activeBtn');
    watchedBtn.classList.remove('activeBtn');
    const queueList = store.load('queue') || [];
    if (queueList.length === 0) {
        gallery.innerHTML = '';
        queueBtn.removeEventListener('click', onQueue);
        return
    } 
    gallery.innerHTML = markupLib(queueList);
};
 
gallery.addEventListener('click', (evt) => modalLib(evt.target.id, click));