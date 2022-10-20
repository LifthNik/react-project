import Header from "../components/header/Header";
import {Outlet} from "react-router-dom";
import Movies from "../components/moviesList/Movies";

export default function MainLayout () {

    return (<div className='mainLayout'>

            <Header/>

            <Movies/>

            <Outlet/>

        </div>
    );
};

export {MainLayout}