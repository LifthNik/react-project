import PosterPreview from "../posterPreview/PosterPreview";

export default function Movie ({movie}) {

    let {original_title, poster_path, vote_average} = movie;

    return (<div className='Movie'>

                <PosterPreview title={original_title} poster={poster_path}/>

            <div>
                {original_title}
            </div>

            <div>
                Stars: {vote_average}
            </div>

        </div>
    );
};

export {
    Movie,
}