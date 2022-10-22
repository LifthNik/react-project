import css from "./Header.module.css"

import User from "../userInfo/UserInfo";
import ThemeSwitcher from "../themeSwicher/ThemeSwither";
import SignUp from "../signUp/SignUp";

export default function Header () {

    return (<div className={css.Header}>

            <div className={css.headerLeft}>

                <SignUp/>

                <ThemeSwitcher/>

            </div>

                <div className={css.title}>Big WebSite Title</div>

            <User/>

        </div>
    );
};

export {Header}