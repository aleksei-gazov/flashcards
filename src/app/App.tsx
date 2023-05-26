import React, {useEffect} from 'react';
import 'app/App.css';
import {useAppSelector} from 'comman/hook/hooks';
import {Route, Routes} from 'react-router-dom';
import {Register} from 'features/auth/register/Register';
import {Login} from 'features/auth/login/Login';
import Header from 'features/header/Header';
import {Profile} from 'comman/components/modalProfile/Profile';
import {useActions} from 'comman/hook/useActions';
import {authThunks} from 'features/auth/authSlice';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';
import {Navigate} from 'features/navigate/Navigate';
import {RecoveryPassoword} from 'features/auth/recoveryPassord/RecoveryPassoword';
import {CheckEmail} from 'features/auth/recoveryPassord/CheckEmail';
import {NewPassword} from 'features/auth/newPassword/NewPassword';
import {PacksList} from 'features/packs/PacksList';

function App() {
    const isLoading = useAppSelector((state) => state.app.isLoading);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {authMe} = useActions({...authThunks})
    console.log(isLoggedIn)
    useEffect(() => {
        authMe({})
    }, []);

    return (
        <div className="App">ggggccccccccccccccccccccccc
            <Header/>
            {/*{isLoading && <h1>Loader...</h1>}*/}
            <Navigate/>
            <Routes>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/password_recovery" element={<RecoveryPassoword/>}/>
                <Route path="/check" element={<CheckEmail/>}/>
                <Route path="/entering_new_password" element={<NewPassword/>}/>
                <Route path="/packs_list" element={<PacksList/>}/>
                {/*<Route path="/*" element={<ErrorComponent />} />*/}
            </Routes>
        </div>
    );
}

export default App;

