import React, {FC, ReactNode} from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';


type TableType = {
    children: ReactNode
}

export const Tables: FC<TableType> = ({children}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                {children}
            </Table>
        </TableContainer>
    );
}
