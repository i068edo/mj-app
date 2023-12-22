import * as React from 'react';
import Box from '@mui/material/Box';
import { teal, grey } from '@mui/material/colors';

export default function FuResult({ fu }) {


    return (
        
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
                {fu}符
            </Box>
     

    )
}