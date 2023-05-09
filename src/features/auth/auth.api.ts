import { AxiosResponse } from 'axios';
import {instance, instanceRec} from 'comman/api/comman.api';
import {
    ArgLoginType,
    ArgRegisterType, NewPosswordType,
    ProfileType,
    RecoveryPasswordType,
    RegisterResponseType,
    UpdateUserType, UserBlockType
} from 'features/auth/authTypes';

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    me: () => {
        return instance.post<'', AxiosResponse<ProfileType>, {}>('auth/me', {})
    },
    updateName: (arg: UpdateUserType) => {
        return instance.put<ProfileType>('auth/me', arg)
    },
    removeMe: () => {
        return instance.delete<ProfileType>('auth/me', {})
    },
    recoveryPassword: (arg: RecoveryPasswordType) => {
        return instanceRec.post<any>('auth/forgot', arg)
    },
    newPassword: (arg: NewPosswordType) => {
        return instanceRec.post<any>('auth/set-new-password', arg)
    },
    blockUser: (arg: UserBlockType) => {
        return instance.post<any>('auth/block', arg)
    },

}


//Types


