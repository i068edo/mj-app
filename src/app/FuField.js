import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import MentsuSelect from './MentsuSelect';

export default function FuField() {
    return (
        <Box sx={{ mt: 3, mb: 3, ml: 1 }} >
            <Box sx={{ minWidth: 120, maxWidth: 300 }}>
                <FormControl fullWidth>
                    <MentsuSelect />
                    <MentsuSelect />
                    <MentsuSelect />
                    <MentsuSelect />



                </FormControl>
            </Box>

            符のフィールドだよ
        </Box>
    )
}