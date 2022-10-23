import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

let movieService = {

    getAllMovies: (page) => axiosInstance.get(`${urls.movies}?page=${page}`),
    // searchMovie: (movie) => axiosInstance.get(`${urls.search}?query=${movie}`)
};

export {
    movieService
}