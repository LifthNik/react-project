import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {movieAction} from "../../redux";
import css from './Search.module.css'

export default function Search () {

    let [request, setRequest] = useState("");

    useEffect(() => {
        if (request) {
            dispatch(movieAction.searchMovie(request));
        }
    }, [request]);

    let dispatch = useDispatch();

    let cleanSearchField = (event) =>{
        event.preventDefault();
        if (request) {
            dispatch(movieAction.searchMovie(request))
        }
        setRequest("")
    }

    return (<div className={css.searchInput}>

            <input className={css.input}
                   type="text"
                   placeholder={'Lets find your movie...'}
                   onChange={(event) => setRequest(event.target.value)}
                   value={request}
            />


            <Link to={'?page=1'}>
                <button className='cleanSearch' onClick={cleanSearchField}>Clean</button>
            </Link>


        </div>
    );
};

export {Search}