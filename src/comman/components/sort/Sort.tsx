import React from 'react';
import ButtonGroup from 'comman/components/buttonGroup/ButtonGroup';
import {Range} from 'comman/components/range/Range';
import s from './Sort.module.scss'
import {ResetSort} from 'comman/components/sort/resetSort/ResetSort';

export const Sort = () => {
    return (
        <div className={s.container}>
            <ButtonGroup nameOne={'My'} nameTwo={'All'}/>
            <Range/>
            <ResetSort/>
        </div>
    );
};
