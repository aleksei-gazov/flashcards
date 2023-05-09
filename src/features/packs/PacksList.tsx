import React from 'react';
import PaksHeader from 'features/packs/packsHeader/PaksHeader';
import {useActions} from 'comman/hook/useActions';
import {packsThunks} from 'features/packs/packsSlice';

export const PacksList = () => {
    const {getPacksList} = useActions({...packsThunks})
    const AddNewPack = () => {
        getPacksList({user_id: '64529b21a9acd92d5ccd75d3'})
        console.log('new pack')
    }

    return (
        <div>
            <PaksHeader title={'Packs list'} titleButton={'Add new pack'} onClickHandler={AddNewPack}/>

        </div>
    );
};

