import axios from "axios";
import {baseURL} from "../config/urls";

let axiosInstance = axios.create({baseURL});

export {
    axiosInstance
}