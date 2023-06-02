import { FC, lazy, ReactElement } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Suspense } from "@components/";

import { selectUser } from "@app/store/reducers/userSlice";
import { useAppSelector } from "../shared/hooks";
import { Error } from "./error";

const Home = lazy(() => import("./home"));
const Whois = lazy(() => import("./whois"));

const AuthGuard: FC<{ children: ReactElement }> = ({ children }) => {
    const userData = useAppSelector(selectUser);

    const isAuthenticated = userData.token && userData.token.length;

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to="/login" />;
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: (
            <AuthGuard>
                <Suspense>
                    <Home />
                </Suspense>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
    {
        path: "/register",
        element: (
            <AuthGuard>
                <Suspense>
                    <Home />
                </Suspense>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
    {
        path: "/",
        element: (
            <AuthGuard>
                <Suspense>
                    <Home />
                </Suspense>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
    {
        path: "/whois",
        element: (
            <AuthGuard>
                <Suspense>
                    <Whois />
                </Suspense>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
]);

export const Routing: FC = function () {
    return <RouterProvider router={router} />;
};
