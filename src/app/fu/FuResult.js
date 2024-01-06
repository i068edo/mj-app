import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function FuResult({ fu }) {
    const theme = useTheme();

    return (
        
            <Box sx={{
                minWidth: 75,
                maxHeight: 50,
                backgroundColor: theme.palette.resultDisplay,
                border: 5,
                borderRadius: 6,
                borderColor: theme.palette.primary.main,
                p: 2,
                display: 'flex',
                justifyContent: 'end',
                fontSize: '32px'
            }}>
                {fu}符
            </Box>
     

    )
}