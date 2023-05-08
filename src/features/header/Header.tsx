import React from 'react'

import logo from '../../assets/image/imageProfile/Group 753.svg'

import s from './Header.module.scss'
import {Logo} from 'comman/components/logo/Logo';
import {useAppSelector} from 'comman/hook/hooks';
import {selectIsLoggedIn, selectProfile} from 'features/auth/auth.selectors';
import Button from 'comman/components/button/Button';

const Header = () => {
    const profile = useAppSelector(selectProfile)
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    console.log(profile.name)
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <Logo logoImg={logo}/>
                {isLoggedIn ?
                    <div className={s.info}>
                        <div className={s.info_data}>
                            <h5>{profile.name}</h5>
                        </div>
                        <div className={s.avatar}>Avatar</div>
                    </div>
                    :
                    <div className={s.headButton}>
                        <Button>
                            Sing In
                        </Button>
                    </div>
                }

            </div>
        </div>
    )
}

export default Header
