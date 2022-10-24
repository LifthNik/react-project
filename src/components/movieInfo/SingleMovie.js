import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction as movieActions} from "../../redux";

import Header from "../header/Header";

import css from './SingleMovie.css'
import {posterURL} from "../../config/urls";

export default function SingleMovie () {

    let {movie} = useSelector(state => state.movie);

    let dispatch = useDispatch();

    let {id} = useParams()

    useEffect(() => {
        if (id) dispatch(movieActions.getMovie(id))
    }, [id])



    return (<div className='SingleMovie'>

            <Header/>

            {movie ? <div className='MovieInfo'>

                        <div className='poster'>
                            <img src={`${posterURL + movie.backdrop_path}`} alt=""/>
                        </div>

                    <div className='description'>
                        <h2 className='title'>{movie.title}</h2>

                        <div className='vote_count'>Total Votes: {movie.vote_count}</div>

                        <div className='release_date'>Release: {movie.release_date}</div>

                        <div className='popularity'>Popularity: {movie.popularity}</div>

                        <div className='language'>Language: {movie.original_language}</div>


                        <div className='useless'>Producer: someone</div>
                        <div className='useless'>Country: somewhere</div>
                        <div className='useless'>Rewards: none</div>
                        <div className='useless'>Cast: much more</div>
                        <div className='useless'>useless title: 5</div>
                    </div>

                        <div className='overview'>Description: {movie.overview}</div>

                    </div>
                    :
                    <h1>No movie</h1>
            }

        </div>
    );
};

export {SingleMovie}