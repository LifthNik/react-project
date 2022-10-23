import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer} from "../slices/genre.slice";
import {themeReducer} from "../slices/theme.slice";


let rootReducer = combineReducers({

    genre:genreReducer,
    theme:themeReducer

})

let setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}