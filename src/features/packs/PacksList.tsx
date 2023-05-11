import React from 'react';
import PaksHeader from 'features/packs/packsHeader/PaksHeader';
import {useActions} from 'comman/hook/useActions';
import {packsThunks} from 'features/packs/packsSlice';
import { Tables } from 'comman/components/Table/Table';
import {THead} from 'comman/components/Table/tableHead/TableHead';
import {TBody} from 'comman/components/Table/tableBody/TableBody';

let cardsPack = {
    name: 'new'
}

export const PacksList = () => {
    const {createPacksList} = useActions({...packsThunks})
    const AddNewPack = () => {
        createPacksList({cardsPack})
        console.log('new pack')
    }

    return (
        <div>
            <PaksHeader title={'Packs list'} titleButton={'Add new pack'} onClickHandler={AddNewPack}/>
            <Tables>
                <THead/>
                <TBody/>
            </Tables>
        </div>
    );
};

