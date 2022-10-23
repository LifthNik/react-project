import {useEffect, useState} from "react";

import Movie from "../movieListCard/Movie";
import css from "./Movies.module.css"
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";


export default function Movies() {

    let [movies, setMovies] = useState([]);

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        movieService.getAllMovies(query.get('page')).then(value => setMovies(value.data));

    }, [query]);


    useEffect(() => {
        movieService.getAllMovies(query.get('page')).then(value => setMovies(value.data));


    }, [query]);

    let nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    let prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    return (<div className={css.Movies}>

            <div className={css.page_buttons}>

                <button disabled={+query.get('page') < 2} onClick={prevPage}>Previous Page</button>

                <button disabled={+query.get('page') > 499} onClick={nextPage}>Next Page</button>

            </div>

            {
                movies?.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

        </div>
    );
};

export {Movie}