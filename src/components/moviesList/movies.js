import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService} from "../../services";
import Movie from "../movieListCard/movie";



export default function Movies () {

    let [movies, setMovies] = useState([]);

    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        movieService.getAllMovies(query.get('page')).then(value => setMovies(value.data));

    }, [query]);


    let nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    let prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    return (<div className='Movies'>

            {
                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

            <button disabled={+query.get('page') < 2} onClick={prevPage}>prev</button>

            <button disabled={+query.get('page') > 499} onClick={nextPage}>Next</button>

        </div>

    );
};

export {Movies}