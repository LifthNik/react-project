import {posterURL} from "../../config/urls";
import PosterPreview from "../posterPreview/PosterPreview";

export default function Movie ({movie}) {

    let {id, original_title, backdrop_path} = movie;

    return (<div className='Movie'>

            <PosterPreview title={original_title} poster={backdrop_path}/>

            {id}

            {original_title}

        </div>
    );
};

export {
    Movie,
}