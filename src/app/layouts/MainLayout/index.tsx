import React, { FC, ReactNode } from "react";

import { Header, Footer } from "@widgets/";

import styles from "./index.module.scss";

interface Props {
    children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={`${styles.MainLayout}`}>
            <div className={`${styles.MainLayout__inner}`}>
                <Header />
                <div className={styles.MainLayout__content}>
                    <main>{children}</main>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export { MainLayout };
