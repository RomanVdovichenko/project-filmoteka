import { markupLib } from "./js/markup-lib";
import { modalLib } from "./js/modal-lib";
import store from "./js/store";

const watchedBtn = document.querySelector('[data-watched]');
const queueBtn = document.querySelector('[data-queue]');
const gallery = document.querySelector('#library');
let c;


watchedBtn.addEventListener('click', onWatched);
queueBtn.addEventListener('click', onQueue);

function onWatched() {
    c = 0;
    const watchedList = store.load('watched') || [];
    console.log('hello');
    if (watchedList.length === 0) {
        gallery.innerHTML = '';
        watchedBtn.removeEventListener('click', onWatched);
        return
    } 
    gallery.innerHTML = markupLib(watchedList);
 };

function onQueue() {
    c = 1;
    const queueList = store.load('queue') || [];
    console.log('goodbay');
    if (queueList.length === 0) {
        gallery.innerHTML = '';
        queueBtn.removeEventListener('click', onQueue);
        return
    } 
    gallery.innerHTML = markupLib(queueList);
};
 
gallery.addEventListener('click', (evt) => modalLib(evt.target.id, c));