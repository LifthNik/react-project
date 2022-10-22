import css from './search.module.css'

export default function Search () {

    return (<div className = {css.searchInput}>
            <input className={css.input} type="text" placeholder={'Lets find your movie...'}/>
        </div>
    );
};

export {Search}