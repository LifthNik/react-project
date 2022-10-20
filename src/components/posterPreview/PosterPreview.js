import {posterURL} from "../../config/urls";


export default function PosterPreview ({poster,title}) {


    return (<div className = 'PosterPreview'>

            <img src={`${posterURL + poster}`} alt={title}/>

        </div>
    );
};

export {PosterPreview}