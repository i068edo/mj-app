import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function FuSubmitButton( props ){

    const {fu, han, tsumoRon, setTotalPoint} = props;

    function FuSubmitClick(){

    }

    function calculateOya(){
        if(han == 1){

        }else if(han == 2){

        }else if(han == 3){

        }else if(han == 4){

        }else{
            setTotalPoint(0);
        }
    }

    function calculateKo(){
        if(han == 1){
            if((fu == 30) && (tsumoRon == 'ロン')){

            }else if((fu == 30) && (tsumoRon == 'ツモ')){

            }else if(){
                
            }

        }else if(han == 2){

        }else if(han == 3){

        }else if(han == 4){

        }else{
            setTotalPoint(0);
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