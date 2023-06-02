import React, { FC } from "react";

import { Logo } from "../logo";

import styles from "./index.module.scss";

const Footer: FC = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={styles.footer__inner}>
                <Logo />
            </div>
        </footer>
    );
};

export { Footer };
