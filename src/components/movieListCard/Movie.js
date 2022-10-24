import PosterPreview from "../posterPreview/PosterPreview";
import StarRating from "../starRating/StarRating";
import GenreBarge from "../genreBarge/GenreBarge";

import css from "./Movie.module.css"
import {Link} from "react-router-dom";


export default function Movie ({movie}) {


    let {title,original_language, poster_path,
        release_date} = movie;


    return (


        <Link className={css.Movie} to={`/movie/${movie.id}`}>


            <div className='movieCard'>

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
        </Link>
    );
};

export {
    Movie
}