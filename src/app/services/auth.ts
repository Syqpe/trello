import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppState } from "@app/store";
import { IUser } from "@localtypes/";

export interface LoginResponse {
    token: string;
}

export interface RegisterResponse {
    id: string;
    token: string;
}

export interface GetUserResponse {
    data: IUser;
}

export interface SignRequest {
    email: string;
    password: string;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://reqres.in/api/",
        prepareHeaders: (headers, { getState }) => {
            const { token } = (getState() as AppState).user;
            if (token && token.length) {
                headers.set("authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, SignRequest>({
            query: credentials => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
        reqister: builder.mutation<RegisterResponse, SignRequest>({
            query: credentials => ({
                url: "register",
                method: "POST",
                body: credentials,
            }),
        }),
        getUser: builder.query<GetUserResponse, string>({
            query: id => ({ url: `users/${id}` }),
        }),
    }),
});

export const { useLoginMutation, useReqisterMutation, useGetUserQuery } = api;
