import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';
import {thunkTryCatch} from 'comman/utils/thunk-try-catch';
import {packsAPI} from 'features/packs/packsAPI';
import {
    CreatePack,
    DeletePack,
    HeadPacksType,
    PacksType,
    ResponsGetPacks,
    SearchParamsType,
    UpdatePack
} from 'features/packs/packsTypes';


const packList: HeadPacksType[] = [
    { title: 'Name', status: 0, sortName: 'name' },
    { title: 'Cards', status: 0, sortName: 'cardsCount' },
    { title: 'Last Updated', status: 0, sortName: 'updated' },
    { title: 'Created by', status: 0, sortName: 'user_name' },
    { title: 'Actions', status: 0 },
]


const getPacksList = createAppAsyncThunk<ResponsGetPacks, SearchParamsType>(
    'packs/getPacksList',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.getPacks(arg);
            console.log(res.data.cardPacks)
            return {cardPacks: res.data.cardPacks}
        })
    }
);
const createPacksList = createAppAsyncThunk<any, CreatePack>(
    'packs/createPacksList',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.createPacks(arg);
            console.log(res)
            dispatch(packsThunks.getPacksList({}))
        })
    }
);
const deletePacksList = createAppAsyncThunk<any, DeletePack>(
    'packs/deletePacksList',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.deletePacks(arg);
            dispatch(packsThunks.getPacksList({}))
        })
    }
);
const updatePacksList = createAppAsyncThunk<any, UpdatePack>(
    'packs/updatePacksList',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            let res = await packsAPI.updatePacks(arg);
            dispatch(packsThunks.getPacksList({}))
        })
    }
);


const slice = createSlice({
    name: 'packs',
    initialState: {
        cardPacks: [] as PacksType[],
        packListTitle: packList,
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
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.searchParams.user_id = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPacksList.fulfilled, (state, action) => {
                state.cardPacks = action.payload.cardPacks;
            })
    }
})
export const packsAction = slice.actions
export const packsReducer = slice.reducer;
export const packsThunks = {getPacksList, createPacksList};