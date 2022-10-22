import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService} from "../../services";
import {genreService} from "../../services/genres.service";

import Movie from "../movieListCard/Movie";
import css from "./Movies.module.css"



export default function Movies () {

    let [movies, setMovies] = useState([]);

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        movieService.getAllMovies(query.get('page')).then(value => setMovies(value.data));

    }, [query]);



    let [genres, setGenres] = useState([])

    useEffect(() => {

        genreService.getAllGenres().then(value => setGenres(value.data));

    }, []);



    let nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    let prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };



    return (<div className={css.Movies}>

            {
                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

            <div className='page_buttons'>

                <button disabled={+query.get('page') < 2} onClick={prevPage}>prev</button>

                <button disabled={+query.get('page') > 499} onClick={nextPage}>Next</button>

            </div>
        </div>
    );
};


export {Movies}