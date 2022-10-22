import {Route, Routes} from "react-router-dom";

import MainLayout from "./pages/MainLayout";


function App() {
    return (

        <Routes>

            <Route path={'/'} element={<MainLayout/>}>

            </Route>

        </Routes>
    );
}

export default App;