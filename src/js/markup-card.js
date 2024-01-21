
// const genreMovies = [
// {id: 28, name: 'Action'},
// {id: 12, name: 'Adventure'},
// {id: 16, name: 'Animation'},
// {id: 35, name: 'Comedy'},
// {id: 80, name: 'Crime'},
// {id: 99, name: 'Documentary'},
// {id: 18, name: 'Drama'},
// {id: 10751, name: 'Family'},
// {id: 14, name: 'Fantasy'},
// {id: 36, name: 'History'},
// {id: 27, name: 'Horror'},
// {id: 10402, name: 'Music'},
// {id: 9648, name: 'Mystery'},
// {id: 10749, name: 'Romance'},
// {id: 878, name: 'Science Fiction'},
// {id: 10770, name: 'TV Movie'},
// {id: 53, name: 'Thriller'},
// {id: 10752, name: 'War'},
// {id: 37, name: 'Western'},
// ];

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
            <a class="movie__link" href="#">
                <div class="movie__box">
                    <img class="movie__img"
                     src="https://image.tmdb.org/t/p/w500${item.poster_path}"
                     alt="${item.title}"
                    />
                </div>
                <div class="movie__desc">
                    <h3 class="movie__title">${item.title}</h3>
                    <p class="movie__genre">${genre} | ${item.release_date.slice(0,4)}</p>
                </div>
            </a>
        </li>`)}).join('');
    return markup
}