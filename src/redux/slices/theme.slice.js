import {createSlice} from "@reduxjs/toolkit"

let initialState = {
    background: 'white',
    color: '#000000',

}

let themeSwitcher = createSlice({
    name: 'themeSwitcher',
    initialState,
    reducers: {
        lightTheme: (state, action) => {
            state.background = "white";
            state.color = "#000000"
        },
        darkTheme: (state, action) => {
            state.background = "#020531";
            state.color = "#ffffff"
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