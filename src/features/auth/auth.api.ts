import { AxiosResponse } from 'axios';
import {instance} from 'comman/api/comman.api';

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
        return instance.post<any>('auth/forgot', arg)
    },
    updatePassword: (arg: NewPosswordType) => {
        return instance.post<any>('auth/set-new-password', arg)
    },

}


//Types
export type UpdateUserType = {
    name: string
    avatar: string
}
export type ArgLoginType = {
    email: string;
    password: string;
    rememberMe: boolean;
};

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type RegisterResponseType = {
    addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>
}

export type ProfileType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    _v: number;
    token: string;
    tokenDeathTime: string
}
type NewPosswordType = {
    password: string
    resetPasswordToken: string
}

export type RecoveryPasswordType = {
    email: string
    message: any
}
export type UpdatePasswordType = {
    password: string
    resetPasswordToken: string
}
