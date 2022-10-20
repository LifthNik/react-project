import PosterPreview from "../posterPreview/PosterPreview";

export default function Movie ({movie}) {

    let {title, original_title, original_language,
        poster_path, vote_average, release_date,
        popularity, vote_count} = movie;

    return (<div className='Movie'>

                <PosterPreview title={title} poster={poster_path}/>

            <div>
                {title}
            </div>

            <div>
                Original Title: {original_title} ({original_language})
            </div>

            <div>
                Stars: {vote_average}
            </div>

            <div>
                {vote_count} votes
            </div>

            <div>
                Release Date: {release_date}
            </div>

            <div>
                Popularity: {popularity}
            </div>

        </div>
    );
};

export {
    Movie,
}