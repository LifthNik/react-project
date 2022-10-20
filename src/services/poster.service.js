import {axiosInstance} from "./axios.service";
import {posterURL} from "../config/urls";

let posterService = {

    getPoster: () => axiosInstance.get(posterURL),
};

export {
    posterService
}