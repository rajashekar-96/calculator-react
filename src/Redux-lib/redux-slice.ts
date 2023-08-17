import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./types";

const initialState: InitialState = {
    output: 0
}

export const arthematicSlice = createSlice({
    name: 'Calculate',
    initialState,
    reducers: {
        add: (state:any, {payload}: PayloadAction<number>) => {
            state.output = state.output + payload;
        },
        subtract:  (state:any,  {payload}: PayloadAction<number>) => {
            state.output = state.output - payload;
        },
        multiply:  (state:any, {payload}: PayloadAction<number>) => {
            state.output = state.output * payload;
        },
        divide:  (state:any,  {payload}: PayloadAction<number>) => {
            state.output = state.output / payload;
        },
        reset:  (state: any) => {
            state.output = 0;
        }
    }
});

export const { add, subtract, multiply, divide, reset } = arthematicSlice.actions;
export default arthematicSlice.reducer;
