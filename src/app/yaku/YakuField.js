import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { OyaKoRadioGroup } from './Radio';
import {MenzenFuuroRadioGroup } from './Radio';
import { TsumoRonRadioGroup } from './Radio';
import YakuList from './YakuList';
import YakuResult from './YakuResult';
import YakuSubmitButton from './YakuSubmitButton';

export default function YakuField( props ){
    const { oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro, tsumoRon, setTsumoRon,
            han, setHan, yakuList, setYakuList, yakuNameList1,
             yakuNameList2, yakuNameList3, yakuNameList6,
              yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint } = props;
    
    return(
        <Box sx={{mt:1, ml:1}}>
            <Stack direction="row" spacing={5} sx={{mb:3}}>
                <OyaKoRadioGroup {...{ oyaKo: oyaKo, setOyaKo: setOyaKo }}/>
                <MenzenFuuroRadioGroup {...{ menzenFuuro: menzenFuuro, setMenzenFuuro: setMenzenFuuro }}/>
                <TsumoRonRadioGroup {...{ tsumoRon: tsumoRon, setTsumoRon: setTsumoRon }}/>
            </Stack>
            
            <YakuSubmitButton  {...{ oyaKo: oyaKo, setOyaKo: setOyaKo, menzenFuuro: menzenFuuro, setMenzenFuuro, setMenzenFuuro,
                  tsumoRon: tsumoRon, setTsumoRon: setTsumoRon, han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList, 
                  yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
                  yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2,
                  totalPoint: totalPoint, setTotalPoint: setTotalPoint }}/>

            <YakuList {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList,
                     yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
                     yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2 }} />

            <YakuResult  {...{ han: han, yakuList: yakuList }}/>
        </Box>
    )
}