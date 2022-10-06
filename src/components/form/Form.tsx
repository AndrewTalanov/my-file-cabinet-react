import { FC, useState } from "react";
import { setStyles } from "../../GlobalFunctions";
import Input from "../input/Input";
import styles from "./Form.module.scss";

const Form: FC = () => {

    const [login, setLogin] = useState(true);

    return (
        <form className={setStyles(styles.form)}>

            <h2>{login ? "Вход" : "Регистрация"}</h2>

            <Input title="Логин" type="text" name="login"/>

            <Input title="Пароль" type="password" name="password"/>

            <Input title="ФИО" type="text" name="fio" style={login ? {display: "none"} : {display: "block"}}/>
            
            <button type="submit" name={login ? "login" : "register"}>{login ? "Войти" : "Регистрация"}</button>

            <a onClick={() => setLogin(!login)}>{login ? "Войти" : "Зарегистрироваться"}</a>

        </form>
    );
}

export default Form;