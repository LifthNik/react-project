import {Outlet} from "react-router-dom";

import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Movies from "../../components/moviesList/Movies";


export default function MainLayout () {


    return (<div className='mainLayout'>

            <Header/>

            <Search/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}