import './App.css';
import Movies from "./components/moviesList/movies";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./pages/mainLayout";




function App() {
    return (
        <Routes>

            <Route path={'/'} element={<MainLayout/>}>



            </Route>

        </Routes>
    );
}

export default App;
