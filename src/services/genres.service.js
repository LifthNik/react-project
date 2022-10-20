import {axiosInstance} from "./axios.service";
import {urls} from "../config/urls";

let genreService = {

    getAllGenres: () => axiosInstance.get(urls.genres),
};

export {
    genreService
}