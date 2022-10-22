import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";
import Movies from "../components/moviesList/Movies";

import {useSelector} from "react-redux";
import Search from "../components/search/Search";

export default function MainLayout () {

    let {background} = useSelector(state => state.theme);

    return (<div style={{background:background}}>

            <Header/>

            <Search/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}