import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function YakuResult( props ) {
    const { han, yakuman, yakuList } = props;
    const theme = useTheme();
    

    return (
        <Box display='flex'  sx={{ position: "sticky", bottom: 0, pb: 1 }}>

            <Box sx={{
                backgroundColor: theme.palette.resultDisplay,
                border: 5,
                borderRadius: 6,
                borderColor: theme.palette.primary.main,
                p: 1,
                mr: 1,
                display: 'flex',
                flex: 1,
                height: '4rem',
                overflow: 'auto' 
            }}>
                {yakuList}
            </Box>

            
            { (yakuman > 0) && 
            <Box sx={{
                backgroundColor: theme.palette.resultDisplay,
                border: 5,
                borderRadius: 6,
                borderColor: theme.palette.secondary.main,
                p: 2,
                fontSize: '2rem',
                whiteSpace: 'nowrap'
            }}>
                {yakuman}倍役満   
            </Box>
            }

            { (yakuman == 0) &&
            <Box sx={{
                backgroundColor: theme.palette.resultDisplay,
                border: 5,
                borderRadius: 6,
                borderColor: theme.palette.primary.main,
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