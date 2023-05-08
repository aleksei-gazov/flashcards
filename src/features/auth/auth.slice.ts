import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    ArgLoginType,
    ArgRegisterType,
    authApi,
    ProfileType,
    RecoveryPasswordType,
    UpdateUserType,
} from 'features/auth/auth.api';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';
import {thunkTryCatch} from 'comman/utils/thunk-try-catch';

const authMe = createAppAsyncThunk<{ profile: ProfileType }, any>(
    'auth/authMe',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.me();
            console.log(res)
            dispatch(authAction.isLoggedIn(true))
            return {profile: res.data};
        });
    }
);

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>(
    'auth/login',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.login(arg);
            dispatch(authAction.isLoggedIn(true))
        });
    }
);

const register = createAppAsyncThunk<{ profile: ProfileType }, ArgRegisterType>(
    'auth/register',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.register(arg);
            dispatch(authAction.isLoggedIn(true))
        });
    }
);

const updateName = createAppAsyncThunk<{ profile: ProfileType }, UpdateUserType>(
    'auth/register',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.updateName(arg);
            return {profile: res.data};
        });
    }
);

const recoveryPassword = createAppAsyncThunk<void, RecoveryPasswordType>(
    'auth/register',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            await authApi.recoveryPassword(arg);
        });
    }
);

const updatePassword = createAppAsyncThunk<void, RecoveryPasswordType>(
    'auth/register',
    async (arg, thunkAPI) => {
        return thunkTryCatch(thunkAPI, async () => {
            await authApi.recoveryPassword(arg);
        });
    }
);

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: {} as ProfileType,
        isLoggedIn: false,
        isRegistered: false as boolean,
        isError: null as string | null | undefined,
    },
    reducers: {
        isLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(login.fulfilled, (state, action) => {
            //     state.profile = action.payload.profile;
            // })
            .addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            })
            // .addCase(register.fulfilled, (state, action) => {
            //     state.profile = action.payload.profile;
            // })
            // .addCase(updateName.fulfilled, (state, action) => {
            //     state.profile = action.payload.profile;
            // })
    },
});

export const authReducer = slice.reducer;
export const authAction = slice.actions
export const authThunks = {register, login, authMe, recoveryPassword, updatePassword, updateName};


