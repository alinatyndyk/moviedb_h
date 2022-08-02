import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../constants";


const genresService = {
    getAll: ()=> axiosService.get(`${urls.genres}${API_KEY}`)
}

export {genresService}