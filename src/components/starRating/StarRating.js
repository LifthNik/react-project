import ReactStars from "react-rating-stars-component";

export default function StarRating ({movie}) {

    let {vote_average} = movie;

    return (<div className = 'StarRating'>

            <ReactStars
                count={10}
                value={vote_average}
                isHalf={true}
                edit={true}
                size={25}
                />

        </div>
    );
};

export {StarRating}