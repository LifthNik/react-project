import axios from "axios";
import {baseURL} from "../config";

let axiosInstance = axios.create({baseURL});

export {
    axiosInstance
}