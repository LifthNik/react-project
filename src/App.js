import {Route, Routes} from "react-router-dom";

import MainLayout from "./pages/MainLayout/MainLayout";
import SingleMovie from "./components/movieInfo/SingleMovie";
import css from "./pages/MainLayout/MainLayout.module.css";
import {useSelector} from "react-redux";



function App() {

    let {background, color} = useSelector(state => state.theme);

    return (
<div style={{background:background, color:color}} className={css.mainLayout}>
        < Routes >

        <Route path={'/'} element={<MainLayout/>}/>
            <Route path={'movies'} element={<MainLayout/>}/>
            <Route path={'/movie/:id'} element={<SingleMovie/>}/>




        </Routes>
</div>
    );
}

export default App;