import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

let initialState = {
   movies: [],
    page: 1,

};


let getAllMovies = createAsyncThunk(

    'getAllMovies',

    async ({page}, {rejectWithValue,}) => {
        try {
            let {data} = await movieService.getAllMovies(page)

            console.log(page)

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    extraReducers:{
        [getAllMovies.fulfilled]: (state,action) => {
            state.movies = action.payload
        }
    }
});

let {reducer: movieReducer} = movieSlice;

let movieAction = {
    getAllMovies
};

export {
    movieAction,
    movieReducer,
};