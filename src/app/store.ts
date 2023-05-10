import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {appReducer} from 'app/app.slice';
import {authReducer} from 'features/auth/authSlice';
import {packsReducer} from 'features/packs/packsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    auth: authReducer,
    packs: packsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
 // export type AppRootStateType = ReturnType<typeof store.reducer>;