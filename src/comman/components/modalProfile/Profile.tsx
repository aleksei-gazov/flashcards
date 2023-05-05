import React, { useEffect } from 'react'

import IconButton from '../../../assets/image/imageProfile/logout.svg'

import s from './Profile.module.scss'

import Button from 'comman/components/button/Button';
import {EditableSpan} from 'comman/components/editableSpan/EditableSpan';
import {useActions} from 'comman/hook/useActions';
import {authThunks} from 'features/auth/auth.slice';

export const Profile = () => {
   const {authMe} = useActions({...authThunks})

    const changeStatus = () => {
        // dispatch()
    }

    const logOutHandler = () => {
        // dispatch() logout
        // dispatch() islogin true
    }

    useEffect(() => {
       authMe({})
    }, [])

    return (
        <div className={s.profile}>
            <div className={s.containerPR}>
                <h3>Personal Information</h3>
                <div className={s.info}>
                    <div className={s.avatar}>
                        <p>Avatar</p>
                    </div>
                    <div className={s.info_data}>
                        <EditableSpan value={'name'} />
                        <a href="#">email</a>
                        <Button
                            onClick={logOutHandler}
                            style={{
                                background: '#FCFCFC',
                                boxShadow:
                                    '0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3)',
                                borderRadius: '30px',
                                width: '127px',
                                height: '36px',
                                padding: '17px 0',
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#000000',
                            }}
                        >
                            <img src={IconButton} alt={'btn'} />
                            Log Out
                        </Button>
                        {/*<button>Log Out</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
