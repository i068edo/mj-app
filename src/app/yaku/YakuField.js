import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { OyaKoRadioGroup } from './Radio';
import {MenzenFuuroRadioGroup } from './Radio';
import { TsumoRonRadioGroup } from './Radio';
import YakuList from './YakuList';

export default function YakuField( props ){
    const { han,  setHan, yakuList, setYakuList, yakuNameList1,
             yakuNameList2, yakuNameList3, yakuNameList6,
              yakumanNameList, yakumanNameList2 } = props;
    
    return(
        <Box sx={{mt:1, ml:1}}>
            <Stack direction="row" spacing={5} sx={{mb:3}}>
                <OyaKoRadioGroup />
                <MenzenFuuroRadioGroup />
                <TsumoRonRadioGroup />
            </Stack>

            <YakuList {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList,
                     yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
                     yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2 }} />
            役のフィールドだよ
        </Box>
    )
}