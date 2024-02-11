
import { markupLib } from "./markup-lib";
import { markupModalLib } from "./markup-modal-lib";
import { moviePageApi } from "./search-query";
import store from "./store";

const galleryLib = document.querySelector('#library');

export async function modalLib(id, c) {
    const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-modal]'),
    modal: document.querySelector('.modal'),
    };
    
    try {
        const moviePage = await moviePageApi(id);
        console.log(moviePage);
        refs.backdrop.classList.remove('is-hidden');
        refs.modal.innerHTML = markupModalLib(moviePage);
        const deleteBtn = document.querySelector('[data-delete]');
        refs.closeModalBtn.addEventListener('click', closeModal);
        function closeModal() {
            refs.backdrop.classList.add('is-hidden');
        }
        deleteBtn.addEventListener('click', onDelete);
        function onDelete() {
            if (c === 0) {
                const watched = store.load('watched');
                const watchedFilter = watched.filter(item => moviePage.id !== item.id);
                store.save('watched', watchedFilter);
                galleryLib.innerHTML = markupLib(watchedFilter);
            }

            if (c === 1) {
                const queue = store.load('queue');
                const queueFilter = queue.filter(item => moviePage.id !== item.id);
                store.save('queue', queueFilter);
                galleryLib.innerHTML = markupLib(queueFilter);
            }
            closeModal();
        }
    }
    catch (err) {
        console.log(err)
    }
 };