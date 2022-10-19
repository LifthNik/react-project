import {useEffect} from "react";

import Movie from "../movieListCard/movie";


export default function Movies () {


    // useEffect(() => {

    //     movieService.getAllMovies().then(value => setMovies(value.data))

    // }, [])


    return (<div className = 'Movies'>

            {
                movies.results?.map(movie => <Movie key={movie.id} movie={movie}/>)
            }

        </div>
    );
};

export {Movies}