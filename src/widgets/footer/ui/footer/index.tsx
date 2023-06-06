import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { Logo } from "../logo";

import styles from "./index.module.scss";

const Footer: FC = () => {
    return (
        <BrowserRouter>
            <footer className={`${styles.footer}`}>
                <div className={styles.footer__inner}>
                    <Logo />
                </div>
            </footer>
        </BrowserRouter>
    );
};

export { Footer };
