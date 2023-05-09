
import React, {FC, ReactNode} from 'react';
import {Table} from 'comman/components/Table/Table';

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
