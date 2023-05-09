import {createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';
import {UserBlockType} from 'features/auth/authTypes';
import {thunkTryCatch} from 'comman/utils/thunk-try-catch';
import {packsAPI} from 'features/packs/packsAPI';

const getPacksList = createAppAsyncThunk<void, any>(
    'packs/getPacksList',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.getPacks(arg);
            console.log(res)
        })
    }
);


const slice = createSlice({
    name: 'packs',
    initialState: {},
    reducers: {},
    // extraReducers: (builder)=> {
    //     builder
    //         .addCase(getPacksList.fulfilled, (state, action) => {
    //             state.profile = action.payload.profile;
    //         })
    // }
})
export const packsThunks = {getPacksList};