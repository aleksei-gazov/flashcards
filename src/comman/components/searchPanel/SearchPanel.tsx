import React, {FC, ReactNode} from 'react';
import s from './SearchPanel.module.scss'
type SearchPanelType = {
    children: ReactNode
}

export const SearchPanel: FC<SearchPanelType> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};
