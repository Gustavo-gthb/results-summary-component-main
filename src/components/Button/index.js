import style from "./Button.module.css";

    function Button () {
        return (
            <button type="button" className={style.button}><span className={style.button_position}>Continue</span></button>
        );
    }

export default Button;   