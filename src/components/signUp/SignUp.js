import css from "./SignUp.module.css";


export default function SignUp () {

    return (<div className={css.signUpDiv}>


                <img className={css.signUpIcon}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png'}
                />

                <img className={css.signUpIcon}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png'}
                />
                <img className={css.signUpIcon}
                     src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'}
                />

        </div>
    );
};

export {SignUp}