import PosterPreview from "../posterPreview/PosterPreview";

import css from "./Movie.module.css"
import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function Movie ({movie}) {

    let {title,original_language, poster_path, release_date, genre_ids,
        vote_average} = movie;

    return (<div className={css.Movie}>

                <PosterPreview title={title} poster={poster_path}/>

            <div className={css.title}>
                {title}
            </div>

            <div className={css.release_date}>
                Release Date: {release_date}, {original_language}
            </div>

            <div>
                Genres Here
            </div>



        </div>
    );
};

export {
    Movie,
}