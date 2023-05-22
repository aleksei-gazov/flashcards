import React, {FC} from 'react';
import Button from 'comman/components/button/Button';
import s from './ButtonGroup.module.scss'
import {packsAction} from 'features/packs/packsSlice';
import {useActions} from 'comman/hook/useActions';
import {useAppSelector} from 'comman/hook/hooks';
import {selectProfile} from 'features/auth/auth.selectors';

type ButtonGroupType = {
    nameOne: string
    nameTwo: string
}

const ButtonGroup: FC<ButtonGroupType> = ({nameOne, nameTwo}) => {
    const profile = useAppSelector(selectProfile)
    const {setUserId} = useActions(packsAction)
    console.log(profile._id)
    const getMyPacks = () => {
        setUserId(profile._id)

    }

    return (
        <div className={s.container}>
            <Button heightButton={'36px'} widthButton={'98px'} onClick={getMyPacks}>
                {nameOne}
            </Button>
            <Button heightButton={'36px'} widthButton={'98px'}>
                {nameTwo}
            </Button>
        </div>
    );
};

export default ButtonGroup;