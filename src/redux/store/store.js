import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "../slices/movie.slice";
import {themeReducer} from "../slices/theme.slice";
import {genreReducer} from "../slices/genre.slice";

let mainReducer = combineReducers({

    movies:moviesReducer,
    theme:themeReducer,
    genre:genreReducer

})

let setupStore = () => configureStore({
    reducer: mainReducer
});

export {
    setupStore
}