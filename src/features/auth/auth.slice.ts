import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ArgLoginType, ArgRegisterType, authApi, ProfileType,} from 'features/auth/auth.api';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';

const authMe = createAsyncThunk(
    'auth/authMe',
    async (arg, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {
            const res = await authApi.me().then((res) => {
                return
            });
        } catch (e) {
            // return rejectWithValue(e.response.data.error)
        }
    }
);


const register = createAsyncThunk(
    'auth/register',
    async (arg: ArgRegisterType, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {
            const res = await authApi.register(arg).then((res) => {
                return
            }); 
        } catch (e) {
            // return rejectWithValue(e.response.data.error)
        }
    }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
    'auth/login',
    async (arg: ArgLoginType) => {
        const res = await authApi.login(arg);
        return {profile: res.data};
    });


const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: null as ProfileType | null,
        isLoggedIn: false as boolean,
        isRegistered: false as boolean,
        isError: null as string | null | undefined,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            });
    },
});

export const authReducer = slice.reducer;
export const authThunks = {register, login, authMe};


