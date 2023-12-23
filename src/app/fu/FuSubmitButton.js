import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function FuSubmitButton( props ){

    const {visibleFuField, setVisibleFuField, visibleResultField, setVisibleResultField, 
        fu, setFu, han, tsumoRon, setTotalPoint, oyaKo} = props;

    function FuSubmitClick(){

        setFu(fu => (Math.ceil(fu / 10)) * 10);

        console.log(visibleFuField);
        setVisibleFuField(false);
        setVisibleResultField(true);

        if(oyaKo == '親'){
            calculateOya();
        }else if(oyaKo == '子'){
            calculateKo();
        }
    }

    function calculateOya(){
        if(han == 1){
            if(tsumoRon == 'ロン'){
                if(fu == 30){
                    setTotalPoint(1500);
                }else if(fu == 40){
                    setTotalPoint(2000);
                }else if(fu == 50){
                    setTotalPoint(2400);
                }else if(fu == 60){
                    setTotalPoint(2900);
                }else if(fu == 70){
                    setTotalPoint(3400);
                }else if(fu == 80){
                    setTotalPoint(3900);
                }else if(fu == 90){
                    setTotalPoint(4400);
                }else if(fu == 100){
                    setTotalPoint(4800);
                }else if(fu == 110){
                    setTotalPoint(5300);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu <= 30){
                    setTotalPoint(500+'オール');
                }else if(fu == 40){
                    setTotalPoint(700+'オール');
                }else if(fu == 50){
                    setTotalPoint(800+'オール');
                }else if(fu == 60){
                    setTotalPoint(1000+'オール');
                }else if(fu == 70){
                    setTotalPoint(1200+'オール');
                }else if(fu == 80){
                    setTotalPoint(1300+'オール');
                }else if(fu == 90){
                    setTotalPoint(1500+'オール');
                }else if(fu == 100){
                    setTotalPoint(1600+'オール');
                }else if(fu == 110){
                    setTotalPoint(1800+'オール');
                }
            }
        }else if(han == 2){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(2000);
                }else if(fu == 30){
                    setTotalPoint(2900);
                }else if(fu == 40){
                    setTotalPoint(3900);
                }else if(fu == 50){
                    setTotalPoint(4800);
                }else if(fu == 60){
                    setTotalPoint(5800);
                }else if(fu == 70){
                    setTotalPoint(6800);
                }else if(fu == 80){
                    setTotalPoint(7700);
                }else if(fu == 90){
                    setTotalPoint(8700);
                }else if(fu == 100){
                    setTotalPoint(9600);
                }else if(fu == 110){
                    setTotalPoint(10600);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(700+'オール');
                }else if(fu == 30){
                    setTotalPoint(1000+'オール');
                }else if(fu == 40){
                    setTotalPoint(1300+'オール');
                }else if(fu == 50){
                    setTotalPoint(1600+'オール');
                }else if(fu == 60){
                    setTotalPoint(2000+'オール');
                }else if(fu == 70){
                    setTotalPoint(2300+'オール');
                }else if(fu == 80){
                    setTotalPoint(2600+'オール');
                }else if(fu == 90){
                    setTotalPoint(2900+'オール');
                }else if(fu == 100){
                    setTotalPoint(3200+'オール');
                }else if(fu == 110){
                    setTotalPoint(3600+'オール');
                }
            }
        }else if(han == 3){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(3900);
                }else if(fu == 30){
                    setTotalPoint(5800);
                }else if(fu == 40){
                    setTotalPoint(7700);
                }else if(fu == 50){
                    setTotalPoint(9600);
                }else if(fu == 60){
                    setTotalPoint(11600);
                }else if(fu >= 70){
                    setTotalPoint(12000);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(1300+'オール');
                }else if(fu == 30){
                    setTotalPoint(2000+'オール');
                }else if(fu == 40){
                    setTotalPoint(2600+'オール');
                }else if(fu == 50){
                    setTotalPoint(3200+'オール');
                }else if(fu == 60){
                    setTotalPoint(3900+'オール');
                }else if(fu >= 70){
                    setTotalPoint(4000+'オール');
                }
            }
        }else if(han == 4){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(7700);
                }else if(fu == 30){
                    setTotalPoint(116000);
                }else if(fu >= 40){
                    setTotalPoint(12000);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(2600+'オール');
                }else if(fu == 30){
                    setTotalPoint(3900+'オール');
                }else if(fu >= 40){
                    setTotalPoint(4000+'オール');
                }
            }
        }
    }

    function calculateKo(){
        if(han == 1){
            if(tsumoRon == 'ロン'){
                if(fu == 30){
                    setTotalPoint(1000);
                }else if(fu == 40){
                    setTotalPoint(1300);
                }else if(fu == 50){
                    setTotalPoint(1600);
                }else if(fu == 60){
                    setTotalPoint(2000);
                }else if(fu == 70){
                    setTotalPoint(2300);
                }else if(fu == 80){
                    setTotalPoint(2600);
                }else if(fu == 90){
                    setTotalPoint(2900);
                }else if(fu == 100){
                    setTotalPoint(3200);
                }else if(fu == 110){
                    setTotalPoint(3600);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 30){
                    setTotalPoint(300+'・'+500);
                }else if(fu == 40){
                    setTotalPoint(400+'・'+700);
                }else if(fu == 50){
                    setTotalPoint(400+'・'+800);
                }else if(fu == 60){
                    setTotalPoint(500+'・'+1000);
                }else if(fu == 70){
                    setTotalPoint(600+'・'+1200);
                }else if(fu == 80){
                    setTotalPoint(700+'・'+1300);
                }else if(fu == 90){
                    setTotalPoint(800+'・'+1500);
                }else if(fu == 100){
                    setTotalPoint(800+'・'+1600);
                }else if(fu == 110){
                    setTotalPoint(900+'・'+1800);
                }
            }
        }else if(han == 2){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(1300);
                }else if(fu == 30){
                    setTotalPoint(2000);
                }else if(fu == 40){
                    setTotalPoint(2600);
                }else if(fu == 50){
                    setTotalPoint(3200);
                }else if(fu == 60){
                    setTotalPoint(3900);
                }else if(fu == 70){
                    setTotalPoint(4500);
                }else if(fu == 80){
                    setTotalPoint(5200);
                }else if(fu == 90){
                    setTotalPoint(5800);
                }else if(fu == 100){
                    setTotalPoint(6400);
                }else if(fu == 110){
                    setTotalPoint(7100);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(400+'・'+700);
                }else if(fu == 30){
                    setTotalPoint(500+'・'+1000);
                }else if(fu == 40){
                    setTotalPoint(700+'・'+1300);
                }else if(fu == 50){
                    setTotalPoint(800+'・'+1600);
                }else if(fu == 60){
                    setTotalPoint(1000+'・'+2000);
                }else if(fu == 70){
                    setTotalPoint(1200+'・'+2300);
                }else if(fu == 80){
                    setTotalPoint(1300+'・'+2600);
                }else if(fu == 90){
                    setTotalPoint(1500+'・'+2900);
                }else if(fu == 100){
                    setTotalPoint(1600+'・'+3200);
                }else if(fu == 110){
                    setTotalPoint(1800+'・'+3600);
                }
            }
        }else if(han == 3){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(2600);
                }else if(fu == 30){
                    setTotalPoint(3900);
                }else if(fu == 40){
                    setTotalPoint(5200);
                }else if(fu == 50){
                    setTotalPoint(6400);
                }else if(fu == 60){
                    setTotalPoint(7700);
                }else if(fu >= 70){
                    setTotalPoint(8000);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(700+'・'+1300);
                }else if(fu == 30){
                    setTotalPoint(1000+'・'+2000);
                }else if(fu == 40){
                    setTotalPoint(1300+'・'+2600);
                }else if(fu == 50){
                    setTotalPoint(1600+'・'+3200);
                }else if(fu == 60){
                    setTotalPoint(2000+'・'+3900);
                }else if(fu >= 70){
                    setTotalPoint(2000+'・'+4000);
                }
            }
        }else if(han == 4){
            if(tsumoRon == 'ロン'){
                if(fu == 20){
                    setTotalPoint(5200);
                }else if(fu == 30){
                    setTotalPoint(7700);
                }else if(fu >= 40){
                    setTotalPoint(8000);
                }
            }else if(tsumoRon == 'ツモ'){
                if(fu == 20){
                    setTotalPoint(1300+'・'+2600);
                }else if(fu == 30){
                    setTotalPoint(2000+'・'+3900);
                }else if(fu >= 40){
                    setTotalPoint(2000+'・'+4000);
                }
            }
        }
    }

    return(
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={FuSubmitClick}>
                <span>送信する</span><TelegramIcon />
            </Button>
        </div>
    )
}