import {combineReducers, configureStore} from "@reduxjs/toolkit";



import {themeReducer} from "../slices/theme.slice";

let mainReducer = combineReducers({
    theme:themeReducer
})

let setupStore = () => configureStore({
    reducer: mainReducer
});

export {
    setupStore
}