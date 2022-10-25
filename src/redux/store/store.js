import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "../slices/movie.slice";
import {genreReducer} from "../slices/genre.slice";
import {themeReducer} from "../slices/theme.slice";


let rootReducer = combineReducers({

    movie: movieReducer,
    genre: genreReducer,
    theme: themeReducer

});

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}