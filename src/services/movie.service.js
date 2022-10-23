import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

let movieService = {

    getAllMovies: (page =1) => axiosInstance.get(`${urls.movies}?page=${page}`),

};

export {
    movieService
}