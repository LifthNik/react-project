export default function Movie ({movie}) {

    let {id, original_title} = movie;

    return (<div className='Movie'>

            {id}

            {original_title}



        </div>
    );
};

export {Movie}