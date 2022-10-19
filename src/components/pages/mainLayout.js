import Header from "../header/header";
import {Outlet} from "react-router-dom";

export default function MainLayout () {

    return (<div className='mainLayout'>

            <Outlet/>

        </div>
    );
};

export {MainLayout}