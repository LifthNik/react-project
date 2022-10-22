import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redux";

import App from './App';
import './index.css';


let store = setupStore()

let initialThemes = {
    light: {
        background: "",
    },
    dark: {
        background: "",
    }
}

let ThemeSwitcher = createContext(initialThemes)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



<Provider store={store}>
<BrowserRouter>
    <ThemeSwitcher.Provider value={initialThemes}>

    <App/>

    </ThemeSwitcher.Provider>
</BrowserRouter>
</Provider>
);
