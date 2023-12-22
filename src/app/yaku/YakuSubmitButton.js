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
        yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint, dora,
        yakuman, setYakuman, isChiitoitsu, isPinfu, setNaniman } = props;

    function yakuSubmitClick(){
        setVisibleYakuField(false);
        if( !((han >= 4) || (yakuman >= 1) || (isChiitoitsu) || (isPinfu) )){
            setVisibleFuField(true);
        }else{
            setVisibleResultField(true);
        }
/* 
        setHan(han+dora); */

        if( (oyaKo == '親') && (yakuman >= 1) ){
            calculateYakumanOya();
        }else if( (oyaKo == '子') && (yakuman >= 1) && (tsumoRon == 'ツモ')){
            calculateYakumanTsumoKo();
        }else if( (oyaKo == '子') && (yakuman >= 1) && (tsumoRon == 'ロン')){
            calculateYakumanRonKo();
        }else if( (oyaKo == '親') && (isChiitoitsu) && (han <= 4)){
            calculateChiitoitsuOya();
        }else if( (oyaKo == '子') && (isChiitoitsu) && (han <= 4) && (tsumoRon == 'ツモ')){
            calculateChiitoitsuTsumoKo();
        }else if( (oyaKo == '子') && (isChiitoitsu) && (han <= 4) && (tsumoRon == 'ロン')){
            calculateChiitoitsuRonKo();
        }else if( (oyaKo == '親') && (isPinfu) && (han <= 4) && (tsumoRon == 'ツモ')){
            calculatePinfuTsumoOya();
        }else if( (oyaKo == '親') && (isPinfu) && (han <= 4) && (tsumoRon == 'ロン')){
            calculatePinfuRonOya();
        }else if( (oyaKo == '子') && (isPinfu) && (han <= 4) && (tsumoRon == 'ツモ')){
            calculatePinfuTsumoKo();
        }else if( (oyaKo == '子') && (isPinfu) && (han <= 4) && (tsumoRon == 'ロン')){
            calculatePinfuRonKo();
        }else if( oyaKo == '親'){
            calculateOver4hanOya(); 
        }else if( oyaKo == '子' && (tsumoRon == 'ツモ')){
            calculateOver4hanTsumoKo();
        }else if( oyaKo == '子' && (tsumoRon == 'ロン')){
            calculateOver4hanRonKo();
        }
        
    }

    function calculateOver4hanOya(){
        if((han >= 4) && (han <= 5)){
            setTotalPoint(12000);
            setNaniman('満貫');
        }else if(han <= 7){
            setTotalPoint(18000);
            setNaniman('跳満');
        }else if(han <= 10){
            setTotalPoint(24000);
            setNaniman('倍満');
        }else if(han <= 12){
            setTotalPoint(36000);
            setNaniman('三倍満');
        }else if(han >= 13){
            setTotalPoint(48000);
            setNaniman('数え役満');
        }
    }

    function calculateOver4hanTsumoKo(){
        if((han >= 4) && (han <= 5)){
            setTotalPoint(2000+'・'+4000);
            setNaniman('満貫');
        }else if(han <= 7){
            setTotalPoint(3000+'・'+6000);
            setNaniman('跳満');
        }else if(han <= 10){
            setTotalPoint(4000+'・'+8000);
            setNaniman('倍満');
        }else if(han <= 12){
            setTotalPoint(6000+'・'+12000);
            setNaniman('三倍満');
        }else if(han >= 13){
            setTotalPoint(8000+'・'+16000);
            setNaniman('数え役満');
        }
    }

    function calculateOver4hanRonKo(){
        if((han >= 4) && (han <= 5)){
            setTotalPoint(8000);
            setNaniman('満貫');
        }else if(han <= 7){
            setTotalPoint(12000);
            setNaniman('跳満');
        }else if(han <= 10){
            setTotalPoint(16000);
            setNaniman('倍満');
        }else if(han <= 12){
            setTotalPoint(24000);
            setNaniman('三倍満');
        }else if(han >= 13){
            setTotalPoint(32000);
            setNaniman('数え役満');
        }
    }

    function calculateYakumanOya(){
        if(yakuman == 1){
            setTotalPoint(48000);
            setNaniman('役満');
        }else if(yakuman == 2){
            setTotalPoint(96000);
            setNaniman('二倍役満');
        }else if(yakuman == 3){
            setTotalPoint(144000);
            setNaniman('三倍役満');
        }else if(yakuman == 4){
            setTotalPoint(192000);
            setNaniman('四倍役満');
        }else if(yakuman == 5){
            setTotalPoint(240000);
            setNaniman('五倍役満');
        }else if(yakuman == 6){
            setTotalPoint(288000);
            setNaniman('六倍役満');
        }else if(yakuman >= 7){
            setTotalPoint(336000);
            setNaniman('七倍役満');
        }
    }

    function calculateYakumanTsumoKo(){
        if(yakuman == 1){
            setTotalPoint(8000+'・'+16000);
            setNaniman('役満');
        }else if(yakuman == 2){
            setTotalPoint(16000+'・'+32000);
            setNaniman('二倍役満');
        }else if(yakuman == 3){
            setTotalPoint(24000+'・'+48000);
            setNaniman('三倍役満');
        }else if(yakuman == 4){
            setTotalPoint(32000+'・'+64000);
            setNaniman('四倍役満');
        }else if(yakuman == 5){
            setTotalPoint(40000+'・'+80000);
            setNaniman('五倍役満');
        }else if(yakuman == 6){
            setTotalPoint(48000+'・'+96000);
            setNaniman('六倍役満');
        }else if(yakuman >= 7){
            setTotalPoint(56000+'・'+112000);
            setNaniman('七倍役満');
        }
    }

    function calculateYakumanRonKo(){
        if(yakuman == 1){
            setTotalPoint(32000);
            setNaniman('役満');
        }else if(yakuman == 2){
            setTotalPoint(64000);
            setNaniman('二倍役満');
        }else if(yakuman == 3){
            setTotalPoint(96000);
            setNaniman('三倍役満');
        }else if(yakuman == 4){
            setTotalPoint(128000);
            setNaniman('四倍役満');
        }else if(yakuman == 5){
            setTotalPoint(160000);
            setNaniman('五倍役満');
        }else if(yakuman == 6){
            setTotalPoint(192000);
            setNaniman('六倍役満');
        }else if(yakuman >= 7){
            setTotalPoint(224000);
            setNaniman('七倍役満');
        }
    }

    function calculateChiitoitsuOya(){
        if(han == 2){
            setTotalPoint(2400);
        }else if(han == 3){
            setTotalPoint(4800);
        }else if(han == 4){
            setTotalPoint(9600);
        }
    }

    function calculateChiitoitsuTsumoKo(){
        if(han == 2){
            setTotalPoint(400+'・'+800);
        }else if(han == 3){
            setTotalPoint(800+'・'+1600);
        }else if(han == 4){
            setTotalPoint(1600+'・'+3200);
        }
    }

    function calculateChiitoitsuRonKo(){
        if(han == 2){
            setTotalPoint(1600);
        }else if(han == 3){
            setTotalPoint(3200);
        }else if(han == 4){
            setTotalPoint(6400);
        }
    }

    function calculatePinfuTsumoOya(){
        if(han == 2){
            setTotalPoint(2100);
        }else if(han == 3){
            setTotalPoint(3900);
        }else if(han == 4){
            setTotalPoint(7800);
        }
    }

    function calculatePinfuRonOya(){
        if(han == 1){
            setTotalPoint(1500); 
        }else if(han == 2){
            setTotalPoint(2900);
        }else if(han == 3){
            setTotalPoint(5800);
        }else if(han == 4){
            setTotalPoint(11600);
        }
    }

    function calculatePinfuTsumoKo(){
        if(han == 2){
            setTotalPoint(400+'・'+700);
        }else if(han == 3){
            setTotalPoint(700+'・'+1300);
        }else if(han == 4){
            setTotalPoint(1300+'・'+2600);
        }
    }

    function calculatePinfuRonKo(){
        if(han == 1){
            setTotalPoint(1000); 
        }else if(han == 2){
            setTotalPoint(2000);
        }else if(han == 3){
            setTotalPoint(3900);
        }else if(han == 4){
            setTotalPoint(7700);
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