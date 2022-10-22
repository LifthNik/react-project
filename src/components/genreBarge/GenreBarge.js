import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {genreAction} from "../../redux";

import css from './GenreBarge.module.css'

import { Badge } from 'reactstrap';

export default function GenreBarge ({movie}) {

    let dispatch = useDispatch();

    let [genres, setGenres] = useState([]);

    useEffect(()=>{
        dispatch(genreAction.getGenre()).then(({payload})=> setGenres(payload.genres))
    },[])

    let genreBarge = genres.filter(genre=>movie.genre_ids.includes(genre.id)).map(data=>data.name)
    genreBarge.length = 2;



    return (<div className = {css.MovieGenres}>

            {genreBarge.map((item,index) => (<div key={index} className={css.GenreBarge}> <Badge color="primary" pill={true}>{item}</Badge></div>))}

        </div>
    );
};

export {GenreBarge}