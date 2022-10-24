import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {genreAction, movieAction as movieActions} from "../../redux";

import Header from "../header/Header";

import css from './SingleMovie.css'
import {posterURL} from "../../config/urls";
import ReactStars from "react-rating-stars-component";
import {Badge} from "reactstrap";


export default function SingleMovie () {

    let {movie} = useSelector(state => state.movie);

    let dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        if (id) dispatch(movieActions.getMovie(id))
    }, [id])



    let [genres, setGenres] = useState([]);

    useEffect(()=>{
        dispatch(genreAction.getGenres()).then(({payload})=> setGenres(payload.genres))
    },[])

    let genreBarge = genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(data=>data.name)



    return (<div className='SingleMovie'>

            <Header/>

            {movie ? <div className='MovieInfo'>

                        <div className='poster'>
                            <img src={`${posterURL + movie.backdrop_path}`} alt=""/>
                        </div>

                    <div className='description'>
                        <h2 className='title'>{movie.title}</h2>

                        <div className='vote_count'>
                            Total Votes: {movie.vote_count} <ReactStars
                                count={10}
                                value={movie.vote_average}
                                isHalf={true}
                                edit={true}
                                size={25}
                            />
                        </div>

                        <div>
                        {genreBarge.map((item,index) => (<div key={index} className='genre'>
                            <Badge color="primary" pill={true}>{item}</Badge>
                        </div>))}
                        </div>

                        <div className='release_date'>
                            Release: {movie.release_date}
                        </div>

                        <div className='popularity'>
                            Popularity: {movie.popularity}
                        </div>

                        <div className='language'>
                            Language: {movie.original_language}
                        </div>


                        <div className='useless'>Producer: someone</div>
                        <div className='useless'>Country: somewhere</div>
                        <div className='useless'>Rewards: none</div>
                        <div className='useless'>Cast: someone</div>
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