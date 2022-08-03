const baseURL = "https://api.themoviedb.org/3"
const API_KEY = "?api_key=fdea29670475ad4a050063e2951fc8a5"

const urls = {
    movies: '/discover/movie',
    genres: '/genre/movie/list'
}

const filters = {
    genreFilter: '&with_genres='
}

export{
    baseURL,
    urls,
    filters,
    API_KEY
}