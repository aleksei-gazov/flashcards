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
export type NewPosswordType = {
    password: string
    resetPasswordToken:  string | undefined
}

export type RecoveryPasswordType = {
    email: string
    message: any
}
export type UserBlockType =  {
    id: string
    blockReason: string
}