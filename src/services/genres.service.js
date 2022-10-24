import {axiosInstance} from "./axios.service";
import {urls} from "../config";

let genreService = {

    getAllGenres: () => axiosInstance.get(urls.genres),
};

export {
    genreService
}