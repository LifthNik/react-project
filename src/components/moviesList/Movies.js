import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import Movie from "../movieListCard/Movie";
import css from "./Movies.module.css"

import {movieAction} from "../../redux";
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";


export default function Movies() {

    let dispatch = useDispatch();

    let {movies} = useSelector(state => state.movie)

    let [query, setQuery] = useSearchParams({page: '1'});


    useEffect(()=>{

        dispatch(movieAction.getAllMovies(query.get('page')));

    },[query])

    // console.log(movies)

    // useEffect(() => {
    //     movieService.getAllMovies(query.get('page')).then(value => setPages(value.data));
    //
    // }, [query]);

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
                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

        </div>
    );
};

export {Movie}