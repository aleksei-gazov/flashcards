import {AppDispatch, RootState} from 'app/store';
import {BaseThunkAPI} from '@reduxjs/toolkit/dist/createAsyncThunk';
import {AxiosError, isAxiosError} from 'axios';
import {appActions} from 'app/app.slice';

export const thunkTryCatch = async (thunkAPI: BaseThunkAPI<RootState, any, AppDispatch, unknown>, logic: Function) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
        dispatch(appActions.setIsLoading({ isLoading: true }))
        return await logic();
    } catch (e) {
        const err = e as Error | AxiosError<{ error: string }>;
        if (isAxiosError(err)) {
            const error = err.response ? err.response.data.error : err.message;
            dispatch(appActions.setAppError({ error }));
        } else {
            dispatch(appActions.setAppError({ error: `Native error ${err.message}` }));
        }
        return rejectWithValue(null);
    } finally {
        dispatch(appActions.setIsLoading({ isLoading: true }))
    }

};