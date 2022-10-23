import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import Header from "../../components/header/Header";
import Movies from "../../components/moviesList/Movies";

import css from "./MainLayout.module.css"
import Search from "../../components/search/Search";

export default function MainLayout () {

    let {background} = useSelector(state => state.theme);

    return (<div style={{background:background}} className={css.mainLayout}>

            <Header/>

            <Search/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}