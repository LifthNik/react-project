import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService} from "../../services";

import Movie from "../movieListCard/Movie";
import css from "./Movies.module.css"
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../../redux";


export default function Movies () {

    let dispatch = useDispatch();

    let {movies} = useSelector(state => state.movie);

    // let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(moviesAction.getAllMovies())
        // movieService.getAllMovies(query.get('page')).then(value => setMovies(value.data));


    }, [dispatch]);


    // let nextPage = () => {
    //     setQuery(value => ({page: +value.get('page') + 1}))
    // };
    //
    // let prevPage = () => {
    //     setQuery(value => ({page: value.get('page') - 1}))
    // };

    return (<div className={css.Movies}>

            <div className={css.page_buttons}>

                {/*<button disabled={+query.get('page') < 2} onClick={prevPage}>Previous Page</button>*/}

                {/*<button disabled={+query.get('page') > 499} onClick={nextPage}>Next Page</button>*/}

            </div>

            {
                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

        </div>
    );
};


export {Movies}