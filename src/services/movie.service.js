import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

let movieService = {

    getAllMovies: () => axiosInstance.get(urls.movies),

    getAllGenres: () => axiosInstance.get(urls.genres),
};

export {
    movieService
}