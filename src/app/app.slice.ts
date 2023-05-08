import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "app",
    initialState: {
        error: null as string | null,
        isLoading: true,
        isAppInitialized: false,
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading;
        },
        setAppError: (state, action: PayloadAction<{ error: any }>) => {
            state.error = action.payload.error
        },
    },
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
