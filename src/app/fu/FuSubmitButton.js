import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalculateIcon from '@mui/icons-material/Calculate';

export default function FuSubmitButton( props ){
    const { setVisibleFuField, setVisibleResultField, 
            fu, setFu, han, tsumoRon, setTotalPoint, oyaKo, setNaniman } = props;

    let basicPoint = 0;

    function roundUp10(num){
        return Math.ceil(num / 100) * 100;      
    }

    function roundUp1(num){
        return Math.ceil(num / 10) * 10;  
    }

    function FuSubmitClick(){
        setVisibleFuField(false);
        setVisibleResultField(true);
        calculateBasicPoint();
        
        if( (han == 3 && fu > 60) || (han == 4 && fu > 30) ){
            calculateManganPoint();
        }else{
            calculatePointFu();
        }
    }

    function calculateBasicPoint(){
        const basicFu = roundUp1(fu);
        basicPoint = basicFu * 4;
        for ( let i = 0; i < han; i++ ){
            basicPoint *= 2;
        }
        setFu(basicFu);
    }

    function calculatePointFu(){
        if( oyaKo == '親' ){
            if( tsumoRon == 'ツモ' ){
                setTotalPoint( roundUp10(basicPoint*2) );
            }else{
                setTotalPoint( roundUp10(basicPoint*2*3) );   
            }
        }else{
            if( tsumoRon == 'ツモ' ){
                setTotalPoint( roundUp10(basicPoint) + '・' + roundUp10(basicPoint*2) );
            }else{
                setTotalPoint(roundUp10(basicPoint*4));
            }
        }
    }

    function calculateManganPoint(){
        setNaniman('満貫');
        if( oyaKo=='親' ){
            if( tsumoRon=='ツモ' ){
                setTotalPoint(4000);
            }else{
                setTotalPoint(12000);
            }
        }else{
            if( tsumoRon=='ツモ' ){
                setTotalPoint(2000 + '・' + 4000);
            }else{
                setTotalPoint(8000);
            }
        }
    }


    return(
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={FuSubmitClick}>
                <span>計算する</span><CalculateIcon sx={{ml: 1}}/>
            </Button>
        </div>
    )
}