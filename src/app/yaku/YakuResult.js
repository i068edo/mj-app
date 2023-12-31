import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { teal ,grey, red } from '@mui/material/colors';

export default function YakuResult( props ) {
    const { han, yakuman, yakuList } = props;
    

    return (
        <Box display='flex'  sx={{ position: "sticky", bottom: 0 }}>

            <Box sx={{
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: teal[300],
                p: 1,
                mr: 1,
                display: 'flex',
                flex: 1,
                height: '4rem',
                overflow: 'scroll' 
            }}>
                {yakuList}
            </Box>

            
            { (yakuman > 0) && 
            <Box sx={{
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: red[500],
                p: 2,
                fontSize: '2rem',
                whiteSpace: 'nowrap'
            }}>
                {yakuman}倍役満   
            </Box>
            }

            { (yakuman == 0) &&
            <Box sx={{
                backgroundColor: grey[200],
                border: 5,
                borderRadius: 6,
                borderColor: teal[300],
                p: 2,
                fontSize: '2rem',
                whiteSpace: 'nowrap'
            }}>
                {han}飜
            </Box>
            }               

        </Box>
    )
}