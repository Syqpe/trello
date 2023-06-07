import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "@app/store";
import { IUser, ICredentials } from "@localtypes";

interface InitialState {
    loading: boolean;

    credentials: ICredentials;

    user: IUser;
}

const initialState: Partial<InitialState> = {
    loading: false,

    credentials: {
        id: null,
        token: null,
    },

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
        setCredentials: (state, action: PayloadAction<ICredentials>) => {
            state.credentials = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const { setLoading, setCredentials, setUser } = userSlice.actions;

const selectUserFunc = (state: AppState): InitialState => state.user as InitialState;
export const selectUser = createSelector(selectUserFunc, user => user);

export default userSlice.reducer;
