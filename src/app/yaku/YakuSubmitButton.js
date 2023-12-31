import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalculateIcon from '@mui/icons-material/Calculate';
import Box from '@mui/material/Box';
import { amber } from '@mui/material/colors';

import { useReducer } from 'react';


export default function YakuSubmitButton( props ){
    const { setVisibleYakuField, setVisibleFuField, setVisibleResultField, 
            oyaKo, menzenFuuro, tsumoRon, han, setFu, setTotalPoint, setIsAll,
            yakuman, isChiitoitsu, isPinfu, setNaniman, 
            setOyaKoRadioGroupError,
            setMenzenFuuroRadioGroupError,
            setTsumoRonRadioGroupError } = props;

    function filedControleFromYaku(){
        setVisibleYakuField(false);
        if( yakuman > 0 || isChiitoitsu || isPinfu || han >= 5 ){
            setVisibleResultField(true);
        }else{
            setVisibleFuField(true);    
        }
    }

    let basicPoint;    
    function calculatePointOverMangan(){
        if( han <= 5 ){
            basicPoint = 2000;
            setNaniman('満貫');
        }else if( han <= 7 ){
            basicPoint = 3000;
            setNaniman('跳満');
        }else if( han <= 10 ){
            basicPoint = 4000;
            setNaniman('倍満');
        }else if( han <= 12 ){
            basicPoint = 6000;
            setNaniman('三倍満');
        }else if( han >= 13 ){
            basicPoint = 8000;
            setNaniman('数え役満');
        }

        if( oyaKo=='親' ){
            if( tsumoRon=='ツモ'){
                setTotalPoint( basicPoint*2 );
            }else{
                setTotalPoint( basicPoint*6 );
            }
        }else{
            if( tsumoRon=='ツモ'){
                setTotalPoint( basicPoint + '・' + basicPoint*2 );
            }else{
                setTotalPoint( basicPoint*4 );
            }
        }
    }

    function calculateBranch(){
        if( yakuman > 0 ){
            if( oyaKo == '親' ){
                calculateYakumanOya();
            }else if( tsumoRon == 'ロン' ){
                calculateYakumanRonKo();
            }else{
                calculateYakumanTsumoKo();
            }
        }else if( han >= 5 ){
            calculatePointOverMangan();
        }else if( isChiitoitsu ){
            if( oyaKo == '親' ){
                calculateChiitoitsuOya();
            }else if( tsumoRon == 'ロン' ){
                calculateChiitoitsuRonKo();
            }else{
                calculateChiitoitsuTsumoKo();
            }
        }else if( isPinfu ){
            if( oyaKo == '親' ){
                if( tsumoRon == 'ロン'){
                    calculatePinfuRonOya()
                }else{
                    calculatePinfuTsumoOya();
                }
            }else if( tsumoRon == 'ロン' ){
                calculatePinfuRonKo();
            }else{
                calculatePinfuTsumoKo();
            }
        }else{
            initFu();
        }
    }

    function yakuSubmitClick(){
        if(oyaKo==''){
            setOyaKoRadioGroupError(true);
            return 1;
        }else if(menzenFuuro==''){
            setMenzenFuuroRadioGroupError(true);
            return 1;
        }else if(tsumoRon==''){
            setTsumoRonRadioGroupError(true);
            return 1;
        }

        if( oyaKo=='親' && tsumoRon=='ツモ' ){
            setIsAll(true);
        }

        filedControleFromYaku();
        calculateBranch();
    }

    function calculateYakumanOya(){
        if( yakuman == 1 ){
            setTotalPoint(48000);
            setNaniman('役満');
        }else if( yakuman == 2 ){
            setTotalPoint(96000);
            setNaniman('二倍役満');
        }else if( yakuman == 3 ){
            setTotalPoint(144000);
            setNaniman('三倍役満');
        }else if( yakuman == 4 ){
            setTotalPoint(192000);
            setNaniman('四倍役満');
        }else if( yakuman == 5 ){
            setTotalPoint(240000);
            setNaniman('五倍役満');
        }else if( yakuman == 6 ){
            setTotalPoint(288000);
            setNaniman('六倍役満');
        }else if( yakuman >= 7 ){
            setTotalPoint(336000);
            setNaniman('七倍役満');
        }
    }

    function calculateYakumanTsumoKo(){
        if( yakuman == 1 ){
            setTotalPoint(8000+'・'+16000);
            setNaniman('役満');
        }else if( yakuman == 2 ){
            setTotalPoint(16000+'・'+32000);
            setNaniman('二倍役満');
        }else if( yakuman == 3 ){
            setTotalPoint(24000+'・'+48000);
            setNaniman('三倍役満');
        }else if( yakuman == 4 ){
            setTotalPoint(32000+'・'+64000);
            setNaniman('四倍役満');
        }else if( yakuman == 5 ){
            setTotalPoint(40000+'・'+80000);
            setNaniman('五倍役満');
        }else if( yakuman == 6 ){
            setTotalPoint(48000+'・'+96000);
            setNaniman('六倍役満');
        }else if( yakuman >= 7 ){
            setTotalPoint(56000+'・'+112000);
            setNaniman('七倍役満');
        }
    }

    function calculateYakumanRonKo(){
        if( yakuman == 1 ){
            setTotalPoint(32000);
            setNaniman('役満');
        }else if( yakuman == 2 ){
            setTotalPoint(64000);
            setNaniman('二倍役満');
        }else if( yakuman == 3 ){
            setTotalPoint(96000);
            setNaniman('三倍役満');
        }else if( yakuman == 4 ){
            setTotalPoint(128000);
            setNaniman('四倍役満');
        }else if( yakuman == 5 ){
            setTotalPoint(160000);
            setNaniman('五倍役満');
        }else if( yakuman == 6 ){
            setTotalPoint(192000);
            setNaniman('六倍役満');
        }else if( yakuman >= 7 ){
            setTotalPoint(224000);
            setNaniman('七倍役満');
        }
    }

    function calculateChiitoitsuOya(){
        if( han == 2 ){
            setTotalPoint(2400);
        }else if( han == 3 ){
            setTotalPoint(4800);
        }else if( han == 4 ){
            setTotalPoint(9600);
        }
    }

    function calculateChiitoitsuTsumoKo(){
        if( han == 2 ){
            setTotalPoint(400+'・'+800);
        }else if( han == 3 ){
            setTotalPoint(800+'・'+1600);
        }else if( han == 4 ){
            setTotalPoint(1600+'・'+3200);
        }
    }

    function calculateChiitoitsuRonKo(){
        if( han == 2 ){
            setTotalPoint(1600);
        }else if( han == 3 ){
            setTotalPoint(3200);
        }else if( han == 4 ){
            setTotalPoint(6400);
        }
    }

    function calculatePinfuTsumoOya(){
        if( han == 2 ){
            setTotalPoint(2100);
        }else if( han == 3 ){
            setTotalPoint(3900);
        }else if( han == 4 ){
            setTotalPoint(7800);
        }
    }

    function calculatePinfuRonOya(){
        if( han == 1 ){
            setTotalPoint(1500); 
        }else if( han == 2 ){
            setTotalPoint(2900);
        }else if( han == 3 ){
            setTotalPoint(5800);
        }else if( han == 4 ){
            setTotalPoint(11600);
        }
    }

    function calculatePinfuTsumoKo(){
        if( han == 2 ){
            setTotalPoint(400+'・'+700);
        }else if( han == 3 ){
            setTotalPoint(700+'・'+1300);
        }else if( han == 4 ){
            setTotalPoint(1300+'・'+2600);
        }
    }

    function calculatePinfuRonKo(){
        if( han == 1 ){
            setTotalPoint(1000); 
        }else if( han == 2 ){
            setTotalPoint(2000);
        }else if( han == 3 ){
            setTotalPoint(3900);
        }else if( han == 4 ){
            setTotalPoint(7700);
        }
    }

    function initFu(){
        setFu(20);
        if( tsumoRon == 'ツモ' ){
            setFu(fu => fu + 2);
        }else if( menzenFuuro == '門前' ){
            setFu(fu => fu + 10);
        }
    }


    return(
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={yakuSubmitClick}>
                <span>計算する</span><CalculateIcon sx={{ml: 1}}/>
            </Button>
        </div>
    )
}