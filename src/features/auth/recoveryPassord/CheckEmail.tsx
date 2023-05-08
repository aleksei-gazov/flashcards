import React, {useEffect} from 'react'

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
import {useAppSelector} from 'comman/hook/hooks';
import {useActions} from 'comman/hook/useActions';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';


export const CheckEmail = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {recoveryPassword} = useActions({...authThunks})

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
                            <Typography
                                fontSize={'14px'}
                                fontWeight={'500'}
                                color={'#0000008a'}
                                variant={'caption'}
                                margin={'30px 0 10px'}
                            >
                                We’ve sent an Email with instructions to <br/>
                                example@mail.com
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
                                Back to login
                            </Button>
                            <NavLink to={'/login'} style={{fontSize: '16px', fontWeight: '600'}}>
                                Try logging in
                            </NavLink>
                </FormControl>
            </Paper>
        </Grid>
    )
}