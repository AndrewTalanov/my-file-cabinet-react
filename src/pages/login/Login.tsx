import { FC } from 'react';

import globals from "../../Global.module.scss";
import styles from "./Login.module.scss";

import { setStyles } from "../../GlobalFunctions";

import imgDecor from "../../assets/img/decor.svg";
import imgLogin from "../../assets/img/rafiki.png";

import Form from '../../components/form/Form';


const Login: FC = () => {

    return (
        <div className={setStyles(globals.viewport, styles.container)}>

            <img className={styles['img-1']} src={imgDecor} alt="декоративные капли" />
            <img className={styles['img-2']} src={imgDecor} alt="декоративные капли" />
            <img className={styles['img-3']} src={imgDecor} alt="декоративные капли" />

            <div className={styles.container}>

                <img src={imgLogin} alt="картинка человека с ручкой" />

                <Form/>

            </div>
        </div>
    )
}

export default Login;