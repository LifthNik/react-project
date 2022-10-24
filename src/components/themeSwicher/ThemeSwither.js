import {useState} from "react";
import {useDispatch} from "react-redux";

import {Button, createTheme, ThemeProvider} from "@mui/material";

import {themeActions} from "../../redux";

import css from './ThemeSwitcher.module.css'


export default function ThemeSwitcher () {


    const buttonThemeColor = createTheme({
        palette: {
            primary: {
                main: '#000000',
                darker: '#000000',
            },
        },
    });


    let [theme, setTheme] = useState(false);

    let dispatch = useDispatch();


    return (
        <ThemeProvider theme={buttonThemeColor}>

            <div className={css.ThemeSwitcher}>

                {!theme ?

                    <Button variant="contained" color={'primary'} size={"small"} onClick={() => {
                        setTheme(true)
                        dispatch(themeActions.darkTheme())
                    }}>Dark Mode</Button>

                    :

                    <Button variant="contained" color={'primary'} size={"small"} onClick={() => {
                        setTheme(false)
                        dispatch(themeActions.lightTheme());
                    }}>Light Mode</Button>}

            </div>

        </ThemeProvider>
    );
};

export {ThemeSwitcher}