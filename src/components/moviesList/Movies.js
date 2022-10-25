import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {movieAction} from "../../redux";

import Movie from "../movieListCard/Movie";
import css from "./Movies.module.css"


export default function Movies() {

    let {movies} = useSelector(state => state.movie);

    console.log(movies)

    let dispatch = useDispatch();

    let [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {

        dispatch(movieAction.getAllMovies(query.get('page')));

    }, [dispatch, query]);


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