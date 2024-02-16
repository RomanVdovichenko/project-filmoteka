export function markupLib(arr) {
  const markup = arr.map(item => {
    let genre = '';
    for (let i = 0; i < item.genres.length; i++) {
      if (i < item.genres.length -1 ) {
        genre += item.genres[i].name + ',' + ' ';
      }
      else {
        genre += item.genres[i].name;
      }
    }
    return (
      `<li class="movie">
          <div class="movie__box">
            <img class="movie__img" id='${item.id}'
              src="https://image.tmdb.org/t/p/w500${item.img}"
              alt="${item.title}"
            />
          </div>
          <div class="movie__desc">
            <h3 class="movie__title">${item.title}</h3>
            <p class="movie__genre">${genre} | ${item.date.slice(0, 4)}
            <span class="movie__vote">${item.vote.toFixed(1)}</span></p>
          </div>
        </li>`)}).join('');
  return markup
}
