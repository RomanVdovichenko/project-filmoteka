
export function markupModal(obj) {
    let genre = '';
    for (let i = 0; i < obj.genres.length; i++) {
        if (i < obj.genres.length -1 ) {
            genre += obj.genres[i].name + ',' + ' ';
        }
        else {
            genre += obj.genres[i].name;
        }
    }
  const markup = `
    <img class="modal__img" src="https://image.tmdb.org/t/p/w500${obj.poster_path}" alt="${obj.title}" />
    <div class="modal__box">
      <p class="modal__title">${obj.title}</p>
      <table class="modal__info">
        <tbody>
          <tr>
            <td class="modal__item one">Vote / Votes</td>
            <td class="votes one"><span class="vote">${obj.vote_average.toFixed(1)}</span> / ${obj.vote_count}</td>
          </tr>
          <tr>
            <td class="modal__item center">Popularity</td>
            <td class="popularity center">${obj.popularity.toFixed(1)}</td>
          </tr>
          <tr>
            <td class="modal__item center">Original Title</td>
            <td class="original center">${obj.original_title}</td>
          </tr>
          <tr>
            <td class="modal__item">Genre</td>
            <td class="genre">${genre}</td>
          </tr>
        </tbody>
      </table>
      <p class="modal__about">About</p>
      <p class="modal__description">${obj.overview}</p>
      <div class="modal__boxBtn">
        <button class="modal__btn" type="button" data-add-watched>add to watched</button>
        <button class="modal__btn" type="button" data-add-queue>add to queue</button>
      </div>
    </div>`;
    return markup
 };