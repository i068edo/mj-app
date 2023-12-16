import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function YakuSubmitButton( props ){
    const { visibleYakuField, setVisibleYakuField, visibleFuField, setVisibleFuField,
        visibleResultField, setVisibleResultField, oyaKo, setOyaKo, menzenFuuro, 
        setMenzenFuuro, tsumoRon, setTsumoRon,
        han, setHan, yakuList, setYakuList, yakuNameList1,
        yakuNameList2, yakuNameList3, yakuNameList6,
        yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint } = props;

    function yakuSubmitClick(){
        console.log(visibleYakuField);
        setVisibleYakuField(false);
        setVisibleResultField(true);
        if( oyaKo == '親' ){
            calculateOver4hanOya();
        }else if( oyaKo == '子' ){
            calculateOver4hanKo();
        }
        
    }

    function calculateOver4hanOya(){
        if(han == 4){
            setTotalPoint(12000);
        }else if(han <= 7){
            setTotalPoint(18000);
        }else if(han <= 10){
            setTotalPoint(24000);
        }else if(han <= 12){
            setTotalPoint(36000);
        }else if(han >= 13){
            setTotalPoint(48000);
        }
    }

    function calculateOver4hanKo(){
        if(han == 4){
            setTotalPoint(8000);
        }else if(han <= 7){
            setTotalPoint(12000);
        }else if(han <= 10){
            setTotalPoint(16000);
        }else if(han <= 12){
            setTotalPoint(24000);
        }else if(han >= 13){
            setTotalPoint(32000);
        }
    }

    return(
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={yakuSubmitClick}>
                <span>送信する</span><TelegramIcon />
            </Button>
        </div>
    )
}