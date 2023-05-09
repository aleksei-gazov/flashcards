import React from 'react'
import {Paper, Typography} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import {NavLink, useNavigate} from 'react-router-dom'

import Button from 'comman/components/button/Button';

import {authThunks} from 'features/auth/authSlice';
import {useAppSelector} from 'comman/hook/hooks';
import {useActions} from 'comman/hook/useActions';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';
import checkEmailIcon from '../../../assets/image/imageCheckEmail/sendMessage.png'


export const CheckEmail = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const {recoveryPassword} = useActions({...authThunks})
    const navigate = useNavigate()
    // if (isLoggedIn) {
    //     return <Navigate to={'/profile'}/>
    // }
    const onClickHandler = ()=> {
navigate('/login')
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
                        Check Email
                    </Typography>
                    <div style={{
                        borderRadius: '50%',
                        border: 'solid 1px',
                        width: '120px',
                        height: '120px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <img style={{width: '100px'}} src={checkEmailIcon} alt=""/>
                    </div>

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
                        onClick={onClickHandler}
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
                </FormControl>
            </Paper>
        </Grid>
    )
}