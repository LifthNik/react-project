import {posterURL} from "../../config/urls";

import css from './Poster.module.css'

export default function PosterPreview ({poster,title}) {


    return (<div className ='PosterPreview'>

            <img className={css.img} src={`${posterURL + poster}`} alt={title}/>

        </div>
    );
};

export {PosterPreview}