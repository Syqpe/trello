import React, { FC } from "react";

import { Typography } from "antd";
import { Logo } from "../logo";

import styles from "./index.module.scss";

const { Title } = Typography;

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__inner}`}>
                <Logo to="/" />

                <Title level={3}>h3. something...</Title>
            </div>
        </header>
    );
};

export { Header };
