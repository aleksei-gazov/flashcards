import React, {useEffect, useState} from 'react'

import {yupResolver} from '@hookform/resolvers/yup'
import {IconButton, InputAdornment, InputLabel, Paper, Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import {useForm} from 'react-hook-form'
import {Navigate, useParams} from 'react-router-dom'
import * as yup from 'yup'

import Button from 'comman/components/button/Button';

import {authThunks} from 'features/auth/authSlice';
import {useAppSelector} from 'comman/hook/hooks';
import {useActions} from 'comman/hook/useActions';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';
import {Visibility, VisibilityOff} from '@mui/icons-material';


const schema = yup.object({
    password: yup
        .string()
        .required('Password is required')
        .min(7, 'Password must be at least 7 characters'),
})

export const NewPassword = () => {
    let { resetPasswordToken } = useParams()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {updatePassword} = useActions({...authThunks})
    const handleClickShowPassword = () => setShowPassword(show => !show)
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful},
        reset,
    } = useForm({
        defaultValues: {
            password: '',
        },
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        reset()
    }, [isSubmitSuccessful])

    const onSubmit = (data: any) => {
        updatePassword({ password: data.password, resetPasswordToken})
        reset()
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
                        Create new password
                    </Typography>
                    <form
                        onSubmit={handleSubmit(data => {
                            onSubmit(data)
                        })}
                    >
                        <FormGroup sx={{alignItems: 'center', fontSize: '16px', fontWeight: '500'}}>
                            <FormControl sx={{width: '35ch'}} variant="standard">
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
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <p style={{color: 'red', fontSize: '12px'}}>{errors.password?.message}</p>
                            </FormControl>
                            <Typography
                                fontSize={'14px'}
                                fontWeight={'500'}
                                color={'#0000008a'}
                                variant={'caption'}
                                margin={'30px 0 10px'}
                            >
                                Create new password and we will send you <br/>
                                further instructions to email
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
                                Create new password
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Paper>
        </Grid>
    )
}