import css from './UserInfo.module.css'

export default function User () {

    return (<div className = {css.User}>

            <img className={css.userIcon} src="https://cdn-icons-png.flaticon.com/512/16/16467.png" alt="user"/>

            <div>Hello, UserName</div>

        </div>
    );
};

export {User}