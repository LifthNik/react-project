import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import Movies from "../components/moviesList/movies";

export default function MainLayout () {

    return (<div className='mainLayout'>

            <Header/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}