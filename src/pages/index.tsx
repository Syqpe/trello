import { FC, lazy, ReactElement } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { Suspense } from "@components";

import { selectUser } from "@reducers/userSlice";
import { DomikLayout, MainLayout } from "@app/layouts";
import { useAppSelector } from "@hooks";
import { Error } from "./error";

const SignIn = lazy(() => import("./domik/sign-in"));
const SignUp = lazy(() => import("./domik/sign-up"));

const Home = lazy(() => import("./home"));
const Whois = lazy(() => import("./whois"));

const AuthGuard: FC<{ children: ReactElement }> = ({ children }) => {
    const userData = useAppSelector(selectUser);

    const isAuthenticated = userData.token && userData.token.length;

    if (isAuthenticated) {
        return children;
    }

    return <Navigate to="/sign-in" />;
};

const router = createBrowserRouter([
    {
        path: "/sign-in",
        element: (
            <DomikLayout>
                <Suspense>
                    <SignIn />
                </Suspense>
            </DomikLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/sign-up",
        element: (
            <DomikLayout>
                <Suspense>
                    <SignUp />
                </Suspense>
            </DomikLayout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/",
        element: (
            <AuthGuard>
                <MainLayout>
                    <Suspense>
                        <Home />
                    </Suspense>
                </MainLayout>
            </AuthGuard>
        ),
        errorElement: <Error />,
    },
    {
        path: "/whois",
        element: (
            <Suspense>
                <Whois />
            </Suspense>
        ),
        errorElement: <Error />,
    },
]);

export const Routing: FC = function () {
    return <RouterProvider router={router} />;
};
