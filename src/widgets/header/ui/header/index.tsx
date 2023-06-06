import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { Typography } from "antd";
import { Logo } from "../logo";

import styles from "./index.module.scss";

const { Title } = Typography;

const Header: FC = () => {
    return (
        <BrowserRouter>
            <header className={styles.header}>
                <div className={`${styles.header__inner}`}>
                    <Logo to="/" />

                    <Title level={3}>h3. something...</Title>
                </div>
            </header>
        </BrowserRouter>
    );
};

export { Header };
