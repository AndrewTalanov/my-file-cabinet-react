import { FC } from "react";

import styles from "./Header.module.scss";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <ul>
                <li className={styles.home}></li>
                <li className={styles.profile}></li>
                <li></li>
                <li></li>
                <li></li>
                <li className={styles.exit}></li>
            </ul>
        </header>
    );
}

export default Header;