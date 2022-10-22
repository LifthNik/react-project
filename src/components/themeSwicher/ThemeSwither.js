import {useState} from "react";
import {useDispatch} from "react-redux";

import {themeActions} from "../../redux";
import {Button} from "reactstrap";



export default function ThemeSwitcher () {


    let [theme, setTheme] = useState(false);

    let dispatch = useDispatch();


    return (<div className = 'ThemeSwitcher'>

            {!theme ?

                <Button color={'light'} onClick={() => {
                    setTheme(true)
                    dispatch(themeActions.darkTheme())
                }}>Dark Mode</Button> :

                <Button color={'light'} onClick={() => {
                    setTheme(false)
                    dispatch(themeActions.lightTheme());
                }}>Light Mode</Button>}

        </div>
    );
};

export {ThemeSwitcher}