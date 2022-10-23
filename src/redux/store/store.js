import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer} from "../slices/genre.slice";
import {themeReducer} from "../slices/theme.slice";
import {movieReducer} from "../slices/movie.slice";


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