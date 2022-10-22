import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {themeReducer} from "../slices/theme.slice";
import {genreReducer} from "../slices/genre.slice";

let mainReducer = combineReducers({
    theme:themeReducer,
    genre:genreReducer
})

let setupStore = () => configureStore({
    reducer: mainReducer
});

export {
    setupStore
}