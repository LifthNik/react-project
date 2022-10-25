import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import {posterURL} from "../../config";

import Header from "../header/Header";

import css from './SingleMovie.css'
import ReactStars from "react-rating-stars-component";
import {Badge} from "reactstrap";
import {Skeleton} from "@mui/material";


export default function SingleMovie() {

    let {movie} = useSelector(state => state.movie);

    let dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        if (id) dispatch(movieAction.getMovie(id))
    }, [id])

    let navigate = useNavigate();


    return (<div className='SingleMovie'>

            <Header/>

            <button className='backButton' onClick={() => navigate(-1)}>Back</button>

            {movie ? <div className='MovieInfo'>

                    <div className='poster'>
                        <img src={`${posterURL + movie.backdrop_path}`} alt={movie.title}/>

                        <div className='genre'>
                            {movie.genres.map(genre =>
                                <Badge key={genre.id} color="primary" pill={true}>{genre.name} </Badge>)}
                        </div>

                    </div>

                    <div className='description'>
                        <h2 className='title'>{movie.title}</h2>
                        <div className='original_title'>{movie.original_title}</div>


                        <div className='vote_count'>
                            Total Votes: {movie.vote_count}
                            <ReactStars
                            count={10}
                            value={movie.vote_average}
                            isHalf={true}
                            edit={true}
                            size={25}
                        />
                        </div>

                        <div className='release_date'>
                            Release: {movie.release_date}
                        </div>

                        <div className='popularity'>
                            Popularity: {movie.popularity}
                        </div>

                        <div className='language'>
                            Language: {movie.spoken_languages.map(lang =>
                            <span key={lang.name}>{lang.english_name} </span>)}
                        </div>


                        <div className='budget'>Budget: {movie.budget}$</div>

                        <div className='country'>Country: {movie.production_countries.map(country =>
                            <span key={country.iso_3166_1}>{country.name} </span>)}
                        </div>

                        <div className='webSite'>Web Site: <a href={movie.homepage}>{movie.homepage}</a></div>

                        <div className='tagLine'>Tagline: {movie.tagline}</div>

                    </div>

                    <div className='overview'>Description: {movie.overview}</div>

                </div>
                :
                <Skeleton animation={'wave'} width={1150} height={1000}><h1>No movie</h1></Skeleton>
            }

        </div>
    );
};

export {SingleMovie}