import React, { FC, PropsWithChildren } from "react";

import styles from "./index.module.scss";

const DomikLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={`${styles.DomikLayout}`}>
            <div className={`${styles.DomikLayout__inner}`}>
                <main>{children}</main>
            </div>
        </div>
    );
};

export { DomikLayout };
