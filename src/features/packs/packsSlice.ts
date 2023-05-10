import {createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';
import {thunkTryCatch} from 'comman/utils/thunk-try-catch';
import {packsAPI} from 'features/packs/packsAPI';
import {PacksType, ResponsGetPacks} from 'features/packs/packsTypes';


const getPacksList = createAppAsyncThunk<ResponsGetPacks, any>(
    'packs/getPacksList',
    async (_, thunkAPI) => {
        const {dispatch, getState} = thunkAPI
        const params = getState().packs.searchParams
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.getPacks(params);
            return {cardPacks: res.data.cardPacks}
        })
    }
);
const createPacksList = createAppAsyncThunk<any, any>(
    'packs/createPacksList',
    async (arg, thunkAPI) => {
        const {dispatch } = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.createPacks(arg);
            return {cardPacks: res.data.cardPacks}
        })
    }
);
// const getPacksList = createAppAsyncThunk<ResponsGetPacks, any>(
//     'packs/getPacksList',
//     async (_, thunkAPI) => {
//         const {dispatch, getState} = thunkAPI
//         const params = getState().packs.searchParams
//         return thunkTryCatch(thunkAPI, async () => {
//             let res = await packsAPI.getPacks(params);
//             return {cardPacks: res.data.cardPacks}
//         })
//     }
// );
// const getPacksList = createAppAsyncThunk<ResponsGetPacks, any>(
//     'packs/getPacksList',
//     async (_, thunkAPI) => {
//         const {dispatch, getState} = thunkAPI
//         const params = getState().packs.searchParams
//         return thunkTryCatch(thunkAPI, async () => {
//             let res = await packsAPI.getPacks(params);
//             return {cardPacks: res.data.cardPacks}
//         })
//     }
// );


const slice = createSlice({
    name: 'packs',
    initialState: {
        cardPacks: [] as PacksType[],
        searchParams: {
            user_id: '',
            packName: '',
            page: 1,
            pageCount: 10,
            min: 0,
            max: 0,
            sortPack: '',
            totalPagesCount: 0,
            minCardsCount: 0,
            maxCardsCount: 0,
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPacksList.fulfilled, (state, action) => {
                state.cardPacks = action.payload.cardPacks;
            })
    }
})
export const packsReducer = slice.reducer;
export const packsThunks = {getPacksList};