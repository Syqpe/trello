import { configureStore } from "@reduxjs/toolkit";

// Из компонентов
import toastsSlice from "@widgets/toasts-renderer/store";

import userSlice from "./reducers/userSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userSlice,

            // Из компонентов
            toasts: toastsSlice,
        },
    });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export { store };
