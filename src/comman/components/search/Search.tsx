import React, {ChangeEvent} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    const clicl = () => {
        console.log('kk')
    }
    const ch = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <IconButton onClick={clicl} type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                onChange={ ch}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </Paper>
    );
}