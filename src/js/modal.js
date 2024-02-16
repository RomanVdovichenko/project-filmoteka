import { markupModal } from "./markup-modal";
import { moviePageApi } from "./search-query";
import store from './store';

function data(obj) {
  return {
    id: obj.id,
    title: obj.title,
    img: obj.poster_path,
    date: obj.release_date,
    genres: obj.genres,
    vote: obj.vote_average,
  }
}

export async function modalOpen(id) {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-modal]'),
    modal: document.querySelector('.modal'),
  };

  try {
    const moviePage = await moviePageApi(id);
    console.log(moviePage);
    refs.backdrop.classList.remove('is-hidden');
    refs.modal.innerHTML = markupModal(moviePage);
    const addWatchedBtn = document.querySelector('[data-add-watched]');
    const addQueueBtn = document.querySelector('[data-add-queue]');
    refs.closeModalBtn.addEventListener('click', closeModal);
    function closeModal() {
      refs.backdrop.classList.add('is-hidden');
    }

    addWatchedBtn.addEventListener('click', onAddWatched);
    addQueueBtn.addEventListener('click', onAddQueue);

    function onAddWatched() {
      const watched = store.load('watched') || [];
      const watchedId = watched.map(item => item.id);
      console.log('onAddWatched');
      if (watchedId.includes(moviePage.id)) {
        addWatchedBtn.removeEventListener('click', onAddWatched);
        return
      }
      watched.push(data(moviePage));
      store.save('watched', watched);
      addWatchedBtn.removeEventListener('click', onAddWatched);
      }

    function onAddQueue() {
      const queue = store.load('queue') || [];
      const queueId = queue.map(item => item.id);
      console.log('onAddQueue');
      if (queueId.includes(moviePage.id)) {
        addQueueBtn.removeEventListener('click', onAddQueue);
        return
      }     
      queue.push(data(moviePage));  
      store.save('queue', queue);
      addQueueBtn.removeEventListener('click', onAddQueue);
    }
  }
  catch (err) {
    console.log(err);
  }
 };
 
