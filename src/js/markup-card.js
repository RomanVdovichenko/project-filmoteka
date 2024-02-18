
export function markup(arr1, arr2) {
  const arrFilter = arr2.filter(item => { 
    return item.poster_path !== null && item.genre_ids.length !== 0
  });
  const markup = arrFilter.map(item => {
    let genre = '';
    for (let i = 0; i < item.genre_ids.length; i ++) {
      for (let j = 0; j < arr1.length; j ++) {
        if (arr1[j].id === item.genre_ids[i]) {
          if (i < item.genre_ids.length -1 ) {
            genre += arr1[j].name + ',' + ' ';
          }
          else {
            genre += arr1[j].name;
          }
        }
      }
    }
    return (
      `<li class="movie">
          <div class="movie__box">
            <img class="lazyload movie__img" id='${item.id}'
              src="./images/Rectangle.png"
              data-src="https://image.tmdb.org/t/p/w500${item.poster_path}"
              alt="${item.title}"
            />
          </div>
          <div class="movie__desc">
            <h3 class="movie__title">${item.title}</h3>
            <p class="movie__genre">${genre} | ${item.release_date.slice(0,4)}</p>
          </div>
        </li>`)}).join('');
    return markup
}