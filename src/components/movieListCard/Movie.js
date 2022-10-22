import css from "./Movie.module.css"

import PosterPreview from "../posterPreview/PosterPreview";
import StarRating from "../starRating/StarRating";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {genreAction} from "../../redux";
import GenreBarge from "../genreBarge/GenreBarge";




export default function Movie ({movie}) {


    let {title,original_language, poster_path,
        release_date, genre_ids} = movie;



    // let dispatch = useDispatch();
    //
    // let [genres, setGenres] = useState([]);
    //
    // useEffect(()=>{
    //     dispatch(genreAction.getGenre()).then(({payload})=> setGenres(payload.genres))
    // },[])
    //
    // let genreBarge = genres.filter(genre=>genre_ids.includes(genre.id)).map(data=>data.name)
    // genreBarge.length = 3;

    return (<div className={css.Movie}>

            <PosterPreview title={title} poster={poster_path}/>

            <div className={css.title}>
                {title}
            </div>

            <div className={css.release_date}>
                Release Date: {release_date}, {original_language}
            </div>

            <GenreBarge movie={movie}/>

            <StarRating movie={movie}/>


        </div>
    );
};

export {
    Movie
}