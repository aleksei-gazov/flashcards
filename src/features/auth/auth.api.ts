import {instance} from 'comman/api/comman.api';

export const authApi = {
    register: (arg: ArgRegisterType) => {
        return instance.post<RegisterResponseType>('auth/register', arg)
    },
    login: (arg: ArgLoginType) => {
        return instance.post<ProfileType>('auth/login', arg)
    },
    me: () => {
        return instance.post<ProfileType>('auth/login', {})
    },
    updateName: (arg: UpdateUserType) => {
        return instance.put<ProfileType>('auth/login', arg)
    },

}


//Types
type UpdateUserType = {
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
