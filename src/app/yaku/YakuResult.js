import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { teal ,grey } from '@mui/material/colors';

export default function YakuResult( props ) {
    const { han, yakuman, yakuList } = props;
    

    return (
        <Box display='flex' alignItems='flex-end' justifyContent='flex-end' sx={{ position: "sticky", bottom: 0 }}>
            <Box sx={{
                minWidth: 200,
                maxWidth: 1000,
                minHeight: 50,
                maxHeight: 50,
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: teal[300],
                p: 2,
                mr: 1,
                display: 'flex',
                overflow: 'scroll' 
            }}>
                {yakuList}
            </Box>
            <Box display='flex' flexDirection='column'>
            <Box sx={{
                minWidth: 75,
                maxHeight: 50,
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: teal[300],
                p: 2,
                display: 'flex',
                fontSize: '20px'
            }}>
                {yakuman}倍役満   
            </Box>
            <Box sx={{
                minWidth: 75,
                maxHeight: 50,
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: teal[300],
                p: 2,
                display: 'flex',
                justifyContent: 'end',
                fontSize: '32px'
            }}>
                {han}飜
            </Box>
                
            </Box>
        </Box>
    )
}