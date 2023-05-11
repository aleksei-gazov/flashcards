
import React, {FC, ReactNode} from 'react';
import Table from '@mui/material/Table';

type TableContainerrType = {
    children: ReactNode
}

export const TableContainer: FC<TableContainerrType> = ({ children }) => {
    return (
        <Table>
            {children}
        </Table>
    );
};
