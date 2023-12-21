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
            han, setHan, yakuList, setYakuList, yakuNameList1,
            yakuNameList2, yakuNameList3, yakuNameList6,
            yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint, dora, setDora,
            yakuman, setYakuman, isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu, setNaniman} = props;
    
    return(
        <Box sx={{mt:1, ml:1}}>
            <Box display='flex' flexWrap='wrap' gap='1rem' sx={{mb:1}}>
                <OyaKoRadioGroup {...{ oyaKo: oyaKo, setOyaKo: setOyaKo }}/>
                <MenzenFuuroRadioGroup {...{ menzenFuuro: menzenFuuro, setMenzenFuuro: setMenzenFuuro }}/>
                <TsumoRonRadioGroup {...{ tsumoRon: tsumoRon, setTsumoRon: setTsumoRon }}/>
                <DoraCount {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList, 
                    dora: dora, setDora: setDora, }}/>
            </Box> 
            
            <YakuSubmitButton  {...{ visibleYakuField: visibleYakuField, setVisibleYakuField: setVisibleYakuField,
                  visibleFuField: visibleFuField, setVisibleFuField: setVisibleFuField, visibleResultField: visibleResultField,
                  setVisibleResultField: setVisibleResultField, oyaKo: oyaKo, setOyaKo: setOyaKo, menzenFuuro: menzenFuuro, setMenzenFuuro, setMenzenFuuro,
                  tsumoRon: tsumoRon, setTsumoRon: setTsumoRon, han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList, 
                  yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
                  yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2,
                  totalPoint: totalPoint, setTotalPoint: setTotalPoint, dora:dora,yakuman: yakuman,setYakuman: setYakuman,
                  isPinfu: isPinfu, isChiitoitsu: isChiitoitsu, setNaniman: setNaniman }}/>

            <YakuList {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList,
                     yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
                     yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2,
                     yakuman: yakuman, setYakuman: setYakuman, isPinfu: isPinfu, setIsPinfu: setIsPinfu,isChiitoitsu: isChiitoitsu,
                     setIsChiitoitsu: setIsChiitoitsu }} />

            <YakuResult  {...{ han: han, yakuman: yakuman, yakuList: yakuList }}/>
        </Box>
    )
}