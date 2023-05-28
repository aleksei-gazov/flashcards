import React from 'react';
import PaksHeader from 'features/packs/packsHeader/PaksHeader';
import {useActions} from 'comman/hook/useActions';
import {packsThunks} from 'features/packs/packsSlice';
import { Tables } from 'comman/components/Table/Table';
import {THead} from 'comman/components/Table/tableHead/TableHead';
import {TBody} from 'comman/components/Table/tableBody/TableBody';
import {useAppSelector} from 'comman/hook/hooks';
import {selectCardPacks, selectHeadTablePack} from 'features/packs/packsSelectors';
import s from './PacksList.module.scss'
import {SearchPanel} from 'comman/components/searchPanel/SearchPanel';
import {Search} from 'comman/components/search/Search';
import { Sort } from 'comman/components/sort/Sort';
import {Navigate} from 'react-router-dom';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';

let cardsPack = {
    name: 'new'
}

export const PacksList = () => {
    const {createPacksList} = useActions({...packsThunks})
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const headPacks = useAppSelector(selectHeadTablePack)
    const cardPacks = useAppSelector(selectCardPacks)
    const AddNewPack = () => {
        // createPacksList({cardsPack})
        console.log('new pack')
    }
    if (!isLoggedIn) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className={s.container}>
            <PaksHeader title={'Packs list'} titleButton={'Add new pack'} onClickHandler={AddNewPack}/>
            <SearchPanel>
                <Search/>
                <Sort/>
            </SearchPanel>
            <Tables>
                <THead headPacksTable={headPacks}/>
                <TBody cardPacks={cardPacks}/>
            </Tables>
        </div>
    );
};

