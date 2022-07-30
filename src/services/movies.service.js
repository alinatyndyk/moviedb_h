import {axiosService} from "./axios.service";
import {API_KEY, urls} from "../constants";

const moviesService = {
    getAll:(page=1)=> axiosService.get(`${urls.movies}${API_KEY}`, {
        params:{page}
    })
}

export {moviesService}