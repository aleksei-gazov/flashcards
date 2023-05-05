import React from 'react'

import logo from '../../assets/image/imageProfile/Group 753.svg'

import s from './Header.module.scss'
import {Logo} from 'comman/components/logo/Logo';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <Logo logoImg={logo}/>
                <div className={s.info}>
                    <div className={s.info_data}>
                        <h5>Name</h5>
                        <p>Status</p>
                    </div>
                    <div className={s.avatar}>Avatar</div>
                </div>
            </div>
        </div>
    )
}

export default Header
