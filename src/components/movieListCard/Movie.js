import PosterPreview from "../posterPreview/PosterPreview";
import StarRating from "../starRating/StarRating";
import GenreBarge from "../genreBarge/GenreBarge";

import css from "./Movie.module.css"



export default function Movie ({movie}) {


    let {title,original_language, poster_path,
        release_date} = movie;


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