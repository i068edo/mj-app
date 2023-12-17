import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

import MentsuSelect from './MentsuSelect';
import JantoSelect from './JantoSelect';
import MachiSelect from './MachiSelect';

export default function FuResult(){
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
                符
            </Box>
        </>
    )
}