import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
    movies: [],
};

let getAll = createAsyncThunk(
    'getAll',
    async (_, {reject}) => {
        try {
            let {data} = await movieService.getAllMovies()
            return data
        } catch (e) {
            return reject(e.response.data)
        }
    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        allWithDispatch: (state, action) => {
            state.movies = action.payload
        },
    }

});

let {reducer: moviesReducer} = movieSlice;

let moviesAction = {
    getAll,
}

export {
    moviesReducer,
    moviesAction
};