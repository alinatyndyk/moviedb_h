import {axiosService} from "./axios.service";
import {API_KEY, filters, urls} from "../constants";


const genresService = {
    getAll: ()=> axiosService.get(`${urls.genres}${API_KEY}`),
    getGenreFilms : (id)=> axiosService.get(`${urls.movies}${API_KEY}${filters.genreFilter}${id}`)
}

export {genresService}