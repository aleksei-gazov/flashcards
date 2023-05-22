import React, { FC, useEffect } from 'react';
import TableBody from '@mui/material/TableBody';
import {styled} from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {PacksType} from 'features/packs/packsTypes';
import {useActions} from 'comman/hook/useActions';
import {packsThunks} from 'features/packs/packsSlice';
import {useAppSelector} from 'comman/hook/hooks';
import {selectHeadTablePack, selectSearchParams} from 'features/packs/packsSelectors';
import {selectIsLoggedIn} from 'features/auth/auth.selectors';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}


const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type TableBodyType = {
    cardPacks?: PacksType[]
}

export const TBody: FC<TableBodyType> = ({cardPacks}) => {
    const {getPacksList} = useActions({...packsThunks})
    const searchParams = useAppSelector(selectSearchParams)
    console.log('tbody')

    useEffect(()=> {
            getPacksList(searchParams)
    },[searchParams])
    return (
        <TableBody>
            {cardPacks?.map((row) => (
                <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.created}</StyledTableCell>
                    <StyledTableCell align="right">{row.updated}</StyledTableCell>
                    <StyledTableCell align="right">{row.updated}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>
    );
};
