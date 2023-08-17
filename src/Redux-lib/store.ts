import { configureStore } from "@reduxjs/toolkit";
import arthematicReducer from './redux-slice';

export const store = configureStore({
    reducer: {
        calculate: arthematicReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;