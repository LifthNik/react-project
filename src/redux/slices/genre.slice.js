import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genres.service";

let initialState = [];

let getGenre = createAsyncThunk(

    'getGenre',

    async (_, {rejectedWithValue}) => {
        try {
            let {data} = await genreService.getAllGenres();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState
});

let {reducer: genreReducer} = genreSlice;

let genreAction = {
    getGenre
};

export {
    genreAction,
    genreReducer
};