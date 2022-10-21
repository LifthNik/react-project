import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";
import Movies from "../components/moviesList/Movies";

import css from "./MainLayout.module.css"

export default function MainLayout () {

    return (<div className={css.MainLayout}>

            <Header/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}