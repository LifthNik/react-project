import PosterPreview from "../posterPreview/PosterPreview";

import css from "./Movie.module.css"

export default function Movie ({movie}) {

    let {title, original_title, original_language,
        poster_path, vote_average, release_date,
        popularity, vote_count} = movie;

    return (<div className={css.Movie}>

                <PosterPreview title={title} poster={poster_path}/>

            <div className="title">
                {title}
            </div>

            <div className='original_title'>
                Original Title: {original_title} ({original_language})
            </div>

            <div className='vote_average'>
                Stars: {vote_average}
            </div>

            <div className='vote_count'>
                {vote_count} votes
            </div>

            <div className='release_date'>
                Release Date: {release_date}
            </div>

            <div className='popularity'>
                Popularity: {popularity}
            </div>

        </div>
    );
};

export {
    Movie,
}