import { FC } from "react";
import { setStyles } from "../../GlobalFunctions";

import globals from "../../Global.module.scss";
import styles from "./App.module.scss";

import Header from "../../components/header/Header";
import Main from "../../components/main/Main";

const App: FC = () => {
    return (
        <div className={setStyles(globals.viewport, styles.wrapper)}>

            <Header/>
            <Main/>

        </div>
    )
}

export default App;