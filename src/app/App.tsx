import React, {useEffect} from 'react';
import 'app/App.css';
import {useAppDispatch, useAppSelector} from 'comman/hook/hooks';
import {appActions} from './app.slice';
import {Route, Routes} from 'react-router-dom';
import {Navigate} from 'features/navigate/Navigate';
import {Register} from 'features/auth/register/Register';
import {Login} from 'features/auth/login/Login';
import Header from 'features/header/Header';
import {Profile} from 'comman/components/modalProfile/Profile';

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(appActions.setIsLoading({isLoading: false}));
        }, 3000);
    }, []);

    return (
        <div className="App">
            <Header/>
            {isLoading && <h1>Loader...</h1>}
            <Navigate/>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                {/*<Route path="/password_recovery" element={<PasswordRecovery />} />*/}
                {/*<Route path="/entering_new_password" element={<NewPassword />} />*/}
                {/*<Route path="/*" element={<ErrorComponent />} />*/}
            </Routes>
        </div>
    );
}

export default App;

