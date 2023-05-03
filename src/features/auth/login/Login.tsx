// import React from 'react';
// import {useAppDispatch} from 'comman/hook/hooks';
// import {authThunks} from 'features/auth/auth.slice';
//
// export const Login = () => {
//     const dispatch = useAppDispatch();
//
//     const loginHandler = () => {
//         const payload = {
//             email: "alekseiNemo@mail.com",
//             password: "09121988",
//             rememberMe: false,
//         }
//         dispatch(authThunks.login(payload));
//     };
//
//     return (
//         <div>
//             Login
//             <button onClick={loginHandler}>login</button>
//         </div>
//     );
// };

import React, { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, InputLabel, Paper, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import { useForm } from 'react-hook-form'
import { Navigate, NavLink } from 'react-router-dom'
import * as yup from 'yup'

import Button from 'comman/components/button/Button';

import {authThunks} from 'features/auth/auth.slice';
import {ArgLoginType} from 'features/auth/auth.api';
import {useAppDispatch, useAppSelector} from 'comman/hook/hooks';


const schema = yup.object({
    email: yup.string().required('Email is required').email(),
    password: yup
        .string()
        .required('Password is required')
        .min(7, 'Password must be at least 7 characters'),
})

export const Login = () => {
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleClickShowPassword = () => setShowPassword(show => !show)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])
    const onSubmit = (data: ArgLoginType) => {
        dispatch(authThunks.login(data))
        reset()
    }

    if (isLoggedIn) {
        return <Navigate to={'/profile'} />
    }

    return (
        <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
            <Paper sx={{ padding: '20px', marginTop: 6 }}>
                <FormControl>
                    <Typography
                        marginBottom={'20px'}
                        component="h1"
                        sx={{ fontSize: '26px', fontWeight: '600' }}
                    >
                        Sign in
                    </Typography>
                    <form
                        onSubmit={handleSubmit(data => {
                            onSubmit(data)
                        })}
                    >
                        <FormGroup sx={{ alignItems: 'center', fontSize: '16px', fontWeight: '500' }}>
                            <FormControl sx={{ width: '35ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                <Input id="standard-adornment-password" type={'text'} {...register('email')} />
                                <p style={{ color: 'red', fontSize: '12px' }}>{errors.email?.message}</p>
                            </FormControl>

                            <FormControl sx={{ width: '35ch' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <p style={{ color: 'red', fontSize: '12px' }}>{errors.password?.message}</p>
                            </FormControl>

                            <FormControlLabel
                                sx={{ width: '100%', textAlign: 'left' }}
                                label={'Remember me'}
                                control={<Checkbox {...register('rememberMe')} />}
                            />

                            <NavLink
                                to={'/password_recovery'}
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    width: '100%',
                                    textAlign: 'right',
                                    marginBottom: '20px',
                                }}
                            >
                                Forgot Password?
                            </NavLink>
                            <Button
                                type={'submit'}
                                style={{
                                    borderRadius: '30px',
                                    marginTop: '40px',
                                    width: '100%',
                                    padding: '17px 0',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                }}
                            >
                                Sign In
                            </Button>
                            <Typography
                                fontSize={'14px'}
                                fontWeight={'500'}
                                color={'#0000008a'}
                                variant={'caption'}
                                margin={'30px 0 10px'}
                            >
                                Already have an account?
                            </Typography>
                            <NavLink to={'/registration'} style={{ fontSize: '16px', fontWeight: '600' }}>
                                Sign Up
                            </NavLink>
                        </FormGroup>
                    </form>
                </FormControl>
            </Paper>
        </Grid>
    )
}