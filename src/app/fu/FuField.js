import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';

import MentsuSelect from './MentsuSelect';
import JantoSelect from './JantoSelect';
import MachiSelect from './MachiSelect';
import FuResult from './FuResult';

export default function FuField( props ) {

    const {fu, setFu} = props;
    
    return (
        <Box sx={{ mt: 3, mb: 3, ml: 1 }} >
            符計算

            <Box sx={{ minWidth: 120, maxWidth: 300 }}>
                <FormControl fullWidth>
                    <FormLabel>メンツ</FormLabel>
                    <MentsuSelect {...{fu: fu, setFu: setFu}}/>
                    <MentsuSelect {...{fu: fu, setFu: setFu}}/>
                    <MentsuSelect {...{fu: fu, setFu: setFu}}/>
                    <MentsuSelect {...{fu: fu, setFu: setFu}}/>
                    <FormLabel>雀頭</FormLabel>
                    <JantoSelect {...{fu: fu, setFu: setFu}}/>
                    <FormLabel>待ちの形</FormLabel>
                    <MachiSelect {...{fu: fu, setFu: setFu}} />


                </FormControl>
            </Box>

            <FuResult {...{fu: fu, setFu: setFu}}/>
        </Box>
    )
}