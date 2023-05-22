import React, {useEffect, useState} from 'react';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import s from './ResetSort.module.scss';

export const ResetSort = () => {

    const resetSearchParamsHandler = () => {

    }

    return (
        <div className={s.container}>
            <FilterAltOffIcon onClick={resetSearchParamsHandler} color="primary" className={s.reset} />
        </div>
    );
};
