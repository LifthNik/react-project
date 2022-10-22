import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    background: 'white',
}

let themeSwitcher = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        lightTheme: (state, action) => {
            state.background = "white";
        },
        darkTheme: (state, action) => {
            state.background = "#020531"
        }
    }
});

let {reducer: themeReducer, actions: {
    lightTheme, darkTheme
}} = themeSwitcher;

let themeActions = {
    lightTheme, darkTheme,
}

export {
    themeSwitcher,
    themeReducer,
    themeActions
}