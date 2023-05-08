import React, {useEffect, useState} from 'react'

import {yupResolver} from '@hookform/resolvers/yup'
import {InputLabel, Paper, Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import {useForm} from 'react-hook-form'
import {Navigate, NavLink} from 'react-router-dom'
import * as yup from 'yup'

import Button from 'comman/components/button/Button';

import {authThunks} from 'features/auth/auth.slice';
import {ArgLoginType} from 'features/auth/auth.api';
import {useAppDispatch, useAppSelector} from 'comman/hook/hooks';
import {useActions} from 'comman/hook/useActions';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';


const schema = yup.object({
    email: yup.string().required('Email is required').email()
})


//     const loginHandler = () => {
//         const payload = {
//             email: "alekseiNemo@mail.com",
//             password: "09121988",
//             rememberMe: false,
//         }
//         dispatch(authThunks.login(payload));
//     };


export const RecoveryPassoword = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {recoveryPassword} = useActions({...authThunks})

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm({
        defaultValues: {
            email: ''
        },
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])
    const onSubmit = (data: any) => {
        recoveryPassword(data.email)
        reset()
    }

    if (isLoggedIn) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <Grid container justifyContent={'center'} textAlign={'center'} alignItems={'center'}>
            <Paper sx={{padding: '20px', marginTop: 6}}>
                <FormControl>
                    <Typography
                        marginBottom={'20px'}
                        component="h1"
                        sx={{fontSize: '26px', fontWeight: '600'}}
                    >
                        Forgot your password?
                    </Typography>
                    <form
                        onSubmit={handleSubmit(data => {
                            onSubmit(data)
                        })}
                    >
                        <FormGroup sx={{alignItems: 'center', fontSize: '16px', fontWeight: '500'}}>
                            <FormControl sx={{width: '35ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                                <Input id="standard-adornment-password" type={'text'} {...register('email')} />
                                <p style={{color: 'red', fontSize: '12px'}}>{errors.email?.message}</p>
                            </FormControl>
                            <Typography
                                fontSize={'14px'}
                                fontWeight={'500'}
                                color={'#0000008a'}
                                variant={'caption'}
                                margin={'30px 0 10px'}
                            >
                                Enter your email address and we will send you <br/>
                                further instructions
                            </Typography>
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
                                Send Instructions
                            </Button>
                            <Typography
                                fontSize={'14px'}
                                fontWeight={'500'}
                                color={'#0000008a'}
                                variant={'caption'}
                                margin={'30px 0 10px'}
                            >
                                Did you remember your password?
                            </Typography>
                            <NavLink to={'/login'} style={{fontSize: '16px', fontWeight: '600'}}>
                                Try logging in
                            </NavLink>
                        </FormGroup>
                    </form>
                </FormControl>
            </Paper>
        </Grid>
    )
}