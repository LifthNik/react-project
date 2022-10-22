import {useState} from "react";
import {useDispatch} from "react-redux";

import {themeActions} from "../../redux";

export default function ThemeSwitcher () {

    let [theme, setTheme] = useState(false);

    let dispatch = useDispatch();

    return (<div className = 'ThemeSwitcher'>

            {!theme ?

                <button onClick={() => {
                    setTheme(true)
                    dispatch(themeActions.darkTheme())
                }}>Switch To Dark Mode</button> :

                <button onClick={() => {
                    setTheme(false)
                    dispatch(themeActions.lightTheme());
                }}>Switch To Light Mode</button>}

        </div>
    );
};

export {ThemeSwitcher}