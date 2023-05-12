import React, {FC} from 'react';
import Button from 'comman/components/button/Button';
import s from './ButtonGroup.module.scss'

type ButtonGroupType = {
    nameOne: string
    nameTwo: string
}

const ButtonGroup: FC<ButtonGroupType> = ({nameOne, nameTwo}) => {
    return (
        <div className={s.container}>
            <Button>
                {nameOne}
            </Button>
            <Button>
                {nameTwo}
        </Button>
        </div>
    );
};

export default ButtonGroup;