import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@app/store";
import { IUser } from "@localtypes/";

interface InitialState {
    loading: boolean;

    token: string | null;
    user: IUser;
}

const initialState: Partial<InitialState> = {
    loading: false,

    token: null,
    user: {
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        avatar: null,
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const { setLoading, setToken, setUser } = userSlice.actions;

const selectUserFunc = (state: AppState): InitialState => state.user as InitialState;

export const selectUser = createSelector(selectUserFunc, user => user);

export default userSlice.reducer;
