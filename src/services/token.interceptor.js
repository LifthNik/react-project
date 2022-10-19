import {axiosInstance} from "./axios.service";

let authToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjNmYTNjZjUxYjJmOGU5ZmY5YzEyNTMzNjZkYTkyYiIsInN1YiI6IjYzNTAzZDZlMzU4MThmMDA3ZTdiMTgzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZMx6BfMFJM0bF_VALLDc4_P4PcY4DJlIw65eK5Ljjwg';

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = authToken;

    return config
});