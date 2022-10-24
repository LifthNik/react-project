import {Route, Routes} from "react-router-dom";

import MainLayout from "./pages/MainLayout/MainLayout";
import SingleMovie from "./components/movieInfo/SingleMovie";
import css from "./pages/MainLayout/MainLayout.module.css";
import {useSelector} from "react-redux";



function App() {

    let {background} = useSelector(state => state.theme);

    return (
<div style={{background:background}} className={css.mainLayout}>
        < Routes >

        <Route path={'/'} element={<MainLayout/>}/>
            <Route path={'/movie/:id'} element={<SingleMovie/>}/>




        </Routes>
</div>
    );
}

export default App;