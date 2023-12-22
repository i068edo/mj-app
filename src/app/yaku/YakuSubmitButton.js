import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

import { useReducer } from 'react';


export default function YakuSubmitButton( props ){
    const { setVisibleYakuField, setVisibleFuField, setVisibleResultField, 
            oyaKo, menzenFuuro, tsumoRon, han, setFu, setTotalPoint, 
            yakuman, isChiitoitsu, isPinfu, setNaniman } = props;


    function yakuSubmitClick(){
        setVisibleYakuField(false);
        if( yakuman > 0 || isChiitoitsu || isPinfu || han >= 5 ){
            setVisibleResultField(true);
        }else{
            setVisibleFuField(true);    
        }

        if( yakuman > 0 ){
            if( oyaKo == '親' ){
                calculateYakumanOya();
            }else if( tsumoRon == 'ロン' ){
                calculateYakumanRonKo();
            }else{
                calculateYakumanTsumoKo();
            }
        }else if( han >= 5 ){
            if( oyaKo == '親' ){
                calculateOver4hanOya();
            }else if( tsumoRon == 'ロン' ){
                calculateOver4hanRonKo();
            }else{
                calculateOver4hanTsumoKo();
            }
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

    function calculateOver4hanOya(){
        if( han <= 5 ){
            setTotalPoint(12000);
            setNaniman('満貫');
        }else if( han <= 7 ){
            setTotalPoint(18000);
            setNaniman('跳満');
        }else if( han <= 10 ){
            setTotalPoint(24000);
            setNaniman('倍満');
        }else if( han <= 12 ){
            setTotalPoint(36000);
            setNaniman('三倍満');
        }else if( han >= 13 ){
            setTotalPoint(48000);
            setNaniman('数え役満');
        }
    }

    function calculateOver4hanTsumoKo(){
        if( han <= 5 ){
            setTotalPoint(2000+'・'+4000);
            setNaniman('満貫');
        }else if( han <= 7 ){
            setTotalPoint(3000+'・'+6000);
            setNaniman('跳満');
        }else if( han <= 10 ){
            setTotalPoint(4000+'・'+8000);
            setNaniman('倍満');
        }else if( han <= 12 ){
            setTotalPoint(6000+'・'+12000);
            setNaniman('三倍満');
        }else if( han >= 13 ){
            setTotalPoint(8000+'・'+16000);
            setNaniman('数え役満');
        }
    }

    function calculateOver4hanRonKo(){
        if( han <= 5 ){
            setTotalPoint(8000);
            setNaniman('満貫');
        }else if( han <= 7 ){
            setTotalPoint(12000);
            setNaniman('跳満');
        }else if( han <= 10 ){
            setTotalPoint(16000);
            setNaniman('倍満');
        }else if( han <= 12 ){
            setTotalPoint(24000);
            setNaniman('三倍満');
        }else if( han >= 13 ){
            setTotalPoint(32000);
            setNaniman('数え役満');
        }
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
                <span>送信する</span><TelegramIcon />
            </Button>
        </div>
    )
}