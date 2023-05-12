import React, { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import {HeadPacksType} from 'features/packs/packsTypes';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

type THeadType = {
    headPacksTable?: HeadPacksType[]
}

export const THead:FC<THeadType> = ({headPacksTable}) => {
    return (
        <TableHead>
            <TableRow>
                {headPacksTable?.map(h=> {
                    return (
                        <StyledTableCell>{h.title}</StyledTableCell>
                    )
                })}
            </TableRow>
        </TableHead>
    );
};
