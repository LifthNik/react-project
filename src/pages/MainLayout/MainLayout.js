import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import Header from "../../components/header/Header";
import Movies from "../../components/moviesList/Movies";
import Search from "../../components/search/Search";

import css from "./MainLayout.module.css"

export default function MainLayout () {



    return (<div >

            <Header/>

            <Search/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}