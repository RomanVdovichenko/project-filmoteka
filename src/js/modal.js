import { markupModal } from "./markup-modal";
import { moviePageApi } from "./search-query";

export async function modalOpen(id) {
  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backdrop: document.querySelector('[data-modal]'),
    modal: document.querySelector('.modal')
  };

  try {
    const moviePage = await moviePageApi(id);
    console.log(moviePage);
    refs.backdrop.classList.remove('is-hidden');
    refs.modal.innerHTML =  markupModal(moviePage);
    refs.closeModalBtn.addEventListener('click', closeModal);
    function closeModal() {
      refs.backdrop.classList.add('is-hidden');
    }
  }
  catch (err) {
    console.log(err);
  }
 };
