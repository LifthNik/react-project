import User from "../userInfo/UserInfo";
import ThemeSwitcher from "../themeSwicher/ThemeSwither";
import SignUp from "../signUp/SignUp";

import css from "./Header.module.css"
export default function Header () {

    return (<div className={css.Header}>

            <div className={css.headerLeft}>

                <SignUp/>

                <ThemeSwitcher/>

            </div>

                <div className={css.title}>Big WebSite Title Component</div>

            <User/>

        </div>
    );
};

export {Header}