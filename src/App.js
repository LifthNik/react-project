import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import MainLayout from "./pages/MainLayout/MainLayout";
import SingleMovie from "./components/movieInfo/SingleMovie";



function App() {

    let {background, color} = useSelector(state => state.theme);

    return (
        <div style={{background: background, color: color}} className='appThemeDiv'>
            < Routes>

                <Route path={'/'} element={<MainLayout/>}/>

                <Route path={'/movie/:id'} element={<SingleMovie/>}/>

            </Routes>
        </div>
    );
}

export default App;