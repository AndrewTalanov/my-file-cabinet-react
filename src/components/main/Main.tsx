import { FC } from "react";
import ButtonAdd from "../button-add/ButtonAdd";

import styles from "./Main.module.scss";

const Main: FC = () => {
    return (
        <main className={styles.main}>

            <ButtonAdd/>

            <div className={styles['main-folder']}>
                <h2>Все папки:</h2>
            </div>

        </main>
    )   
}

export default Main;