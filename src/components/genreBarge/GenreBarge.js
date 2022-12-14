import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {genreAction} from "../../redux";

import { Badge } from 'reactstrap';

import css from './GenreBarge.module.css'

export default function GenreBarge ({movie}) {

    let [genres, setGenres] = useState([]);

    let dispatch = useDispatch();


    useEffect(()=>{
        dispatch(genreAction.getGenres()).then(({payload})=> setGenres(payload.genres))
    },[])

    let genreBarge = genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(data=>data.name)
    genreBarge.length = 3;



    return (<div className = {css.MovieGenres}>

            {genreBarge.map((item,index) => (<div key={index} className={css.GenreBarge}>
                <Badge color="primary" pill={true}>{item}</Badge>
            </div>))}

        </div>
    );
};

export {GenreBarge}