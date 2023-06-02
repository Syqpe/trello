import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@app/store";

interface Props {
    children: ReactNode;
}

const DefaultLayout: FC<Props> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export { DefaultLayout };
