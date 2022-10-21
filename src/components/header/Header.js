import User from "../userInfo/UserInfo";

import css from "./Header.module.css"

export default function Header () {

    return (<div className ={css.Header}>


            <input type="text"/>

            <User/>


            
            
        </div>
    );
};

export {Header}