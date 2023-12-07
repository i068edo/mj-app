import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { OyaKoRadioGroup } from './Radio';
import {MenzenFuuroRadioGroup } from './Radio';
import { TsumoRonRadioGroup } from './Radio';
import YakuList from '@/YakuList';

export default function YakuField(){
    return(
        <Box sx={{mt:1, ml:1}}>
            <Stack direction="row" spacing={5}>
                <OyaKoRadioGroup />
                <MenzenFuuroRadioGroup />
                <TsumoRonRadioGroup />
            </Stack>

            <YakuList />
            役のフィールドだよ
        </Box>
    )
}