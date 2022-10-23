import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
    movies: [],
};

let getAllMovies = createAsyncThunk(
    'moviesSlice',
    async (_, {reject}) => {

        try {
            let {data} = await movieService.getAllMovies()
            return data

        }
        catch (e) {
            return reject(e.response.data)
        }

    }
)

let moviesSlice = createSlice({

    name: 'moviesSlice',
    initialState,

    Reducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
    },
});

let {reducer: moviesReducer} = moviesSlice;

let moviesAction = {
    getAllMovies,
}

export {
    moviesReducer,
    moviesAction
};