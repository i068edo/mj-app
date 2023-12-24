import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function FuSubmitButton( props ){
    const { setVisibleFuField, setVisibleResultField, 
            fu, setFu, han, tsumoRon, setTotalPoint, oyaKo} = props;

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
        calculatePointFu();
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
            if( tsumoRon == 'ツモ'){ /* 変更 ただしオール表記に違和感 */
                setTotalPoint( roundUp10(basicPoint*2) + 'オール' ); 
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


    return(
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={FuSubmitClick}>
                <span>送信する</span><TelegramIcon />
            </Button>
        </div>
    )
}