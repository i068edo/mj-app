import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

export default function FuResult( props ){
    const {fu, setFu, tsumoRon, menzenFuuro} = props;

    return(
        <>
            <Box sx={{ 
                border: 1,
                borderRadius: 2,
                p: 2,
                minWidth: 30,
                maxWidth: 60,
                display: 'flex',
                justifyContent: 'center'
                }}>
                {fu}符
            </Box>
        </>
    )
}