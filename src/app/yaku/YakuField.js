import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { OyaKoRadioGroup } from './Radio';
import { MenzenFuuroRadioGroup } from './Radio';
import { TsumoRonRadioGroup } from './Radio';
import YakuList from './YakuList';
import YakuResult from './YakuResult';
import YakuSubmitButton from './YakuSubmitButton';
import DoraCount from './DoraCount';

export default function YakuField(props) {
    const { visibleYakuField, setVisibleYakuField, visibleFuField, setVisibleFuField,
        visibleResultField, setVisibleResultField,
        oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro, tsumoRon, setTsumoRon,
        han, setHan, fu, setFu, yakuList, setYakuList, yakuNameList1,
        yakuNameList2, yakuNameList3, yakuNameList6,
        yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint, isAll, setIsAll, dora, setDora,
        yakuman, setYakuman, isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu, setNaniman } = props;
    const [oyaKoRadioGroupError, setOyaKoRadioGroupError] = useState(false);
    const [menzenFuuroRadioGroupError, setMenzenFuuroRadioGroupError] = useState(false);
    const [tsumoRonRadioGroupError, setTsumoRonRadioGroupError] = useState(false);


    return (
        <Box sx={{ mt: 1, ml: 1 }}>

            <Box display='flex' gap='1rem'
                 sx={{
                    "@media screen and (max-width:720px)": {
                    display: "block",
                },
            }}>
                <Box sx={{ mb: 3, ml: 1 }}>
                    <Typography variant="h5" component="div" color='primary' fontWeight='bold'>あがり方</Typography>
                    <Typography variant="body1" sx={{ mb: 3 }} color='information' >適当なものを選択しましょう。</Typography>

                    <Box display='flex' flexWrap='wrap' gap='1rem'>
                        <OyaKoRadioGroup {...{
                            oyaKo, setOyaKo,
                            oyaKoRadioGroupError, setOyaKoRadioGroupError
                        }} />
                        <MenzenFuuroRadioGroup {...{
                            menzenFuuro, setMenzenFuuro,
                            menzenFuuroRadioGroupError, setMenzenFuuroRadioGroupError
                        }} />
                        <TsumoRonRadioGroup {...{
                            tsumoRon, setTsumoRon,
                            tsumoRonRadioGroupError, setTsumoRonRadioGroupError
                        }} />

                    </Box>
                </Box>

                <Box sx={{ mb: 3, ml: 1 }}>
                    <Typography variant="h5" component="div" color='primary' fontWeight='bold'>ドラの数</Typography>
                    <Typography variant="body1" sx={{ mb: 1 }} color='information' >ドラの数を入力しましょう。</Typography>
                    <DoraCount {...{ han, setHan, yakuList, setYakuList, dora, setDora, }} />
                </Box>

                <YakuSubmitButton  {...{
                    visibleYakuField, setVisibleYakuField,
                    visibleFuField, setVisibleFuField, visibleResultField,
                    setVisibleResultField, oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro,
                    tsumoRon, setTsumoRon, han, setHan, fu, setFu, yakuList, setYakuList,
                    yakuNameList1, yakuNameList2, yakuNameList3,
                    yakuNameList6, yakumanNameList, yakumanNameList2,
                    totalPoint, setTotalPoint, setIsAll, dora, yakuman, setYakuman,
                    isPinfu, isChiitoitsu, setNaniman,
                    setOyaKoRadioGroupError,
                    setMenzenFuuroRadioGroupError,
                    setTsumoRonRadioGroupError
                }} />
            </Box>

            <YakuList {...{
                han, setHan, yakuList, setYakuList, yakuman, setYakuman,
                yakuNameList1, yakuNameList2, yakuNameList3, yakuNameList6,
                yakumanNameList, yakumanNameList2,
                isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu
            }} />

            <YakuResult  {...{ han, yakuman, yakuList }} />
        </Box>
    )
}