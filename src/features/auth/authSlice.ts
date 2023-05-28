import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
    ArgLoginType,
    ArgRegisterType,
    NewPosswordType,
    ProfileType,
    RecoveryPasswordType,
    UpdateUserType, UserBlockType,
} from 'features/auth/authTypes';
import {createAppAsyncThunk} from 'comman/utils/create-app-async-thunk';
import {thunkTryCatch} from 'comman/utils/thunk-try-catch';
import { authApi } from './auth.api';
import {packsThunks} from 'features/packs/packsSlice';

const authMe = createAppAsyncThunk<{ profile: ProfileType }, any>(
    'auth/authMe',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.me();
            dispatch(authAction.isLoggedIn(true))
            // console.log(res.data)
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
            console.log(res)
            dispatch(authAction.isLoggedIn(true))
            return {profile: res.data};
        });
    }
);

const register = createAppAsyncThunk<{ profile: ProfileType }, ArgRegisterType>(
    'auth/register',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            const res = await authApi.register(arg);
            dispatch(authAction.isRegistered(true))
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

const updatePassword = createAppAsyncThunk<void, NewPosswordType>(
    'auth/register',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            await authApi.newPassword(arg);
            dispatch(authAction.isLoggedIn(false))
        });
    }
);
const userBlock = createAppAsyncThunk<void, UserBlockType>(
    'auth/userBlock',
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        return thunkTryCatch(thunkAPI, async () => {
            await authApi.blockUser(arg);
        });
    }
);

const slice = createSlice({
    name: 'auth',
    initialState: {
        profile: {} as ProfileType,
        isLoggedIn: false as boolean,
        isRegistered: false as boolean,
        isError: null as string | null | undefined,
    },
    reducers: {
        isLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
        isRegistered: (state, action: PayloadAction<boolean>) => {
            state.isRegistered = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            }).addCase(authMe.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            })
            .addCase(updateName.fulfilled, (state, action) => {
                state.profile = action.payload.profile;
            })
    },
});

export const authReducer = slice.reducer;
export const authAction = slice.actions
export const authThunks = {register, login, authMe, recoveryPassword, updatePassword, updateName};


