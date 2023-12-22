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
import DoraCount from './DoraCount';

export default function YakuField( props ){
    const { visibleYakuField, setVisibleYakuField, visibleFuField, setVisibleFuField,
            visibleResultField, setVisibleResultField,
            oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro, tsumoRon, setTsumoRon,
            han, setHan, fu, setFu, yakuList, setYakuList, yakuNameList1,
            yakuNameList2, yakuNameList3, yakuNameList6,
            yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint, dora, setDora,
            yakuman, setYakuman, isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu, setNaniman} = props;
    
    return(
        <Box sx={{mt:1, ml:1}}>
            <Box display='flex' flexWrap='wrap' gap='1rem' sx={{mb:1}}>
                <OyaKoRadioGroup {...{ oyaKo, setOyaKo }}/>
                <MenzenFuuroRadioGroup {...{ menzenFuuro, setMenzenFuuro }}/>
                <TsumoRonRadioGroup {...{ tsumoRon, setTsumoRon }}/>
                <DoraCount {...{ han, setHan, yakuList, setYakuList, dora, setDora, }}/>
            </Box> 
            
            <YakuSubmitButton  {...{ visibleYakuField, setVisibleYakuField,
                  visibleFuField, setVisibleFuField, visibleResultField,
                  setVisibleResultField, oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro,
                  tsumoRon, setTsumoRon, han, setHan, fu, setFu, yakuList, setYakuList, 
                  yakuNameList1, yakuNameList2, yakuNameList3,
                  yakuNameList6, yakumanNameList, yakumanNameList2,
                  totalPoint, setTotalPoint, dora, yakuman, setYakuman,
                  isPinfu, isChiitoitsu, setNaniman }}/>

            <YakuList {...{ han, setHan, yakuList, setYakuList, yakuman, setYakuman,
                yakuNameList1, yakuNameList2, yakuNameList3, yakuNameList6, 
                yakumanNameList,  yakumanNameList2,
                isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu }} />

            <YakuResult  {...{ han, yakuman, yakuList }}/>
        </Box>
    )
}