import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalculateIcon from '@mui/icons-material/Calculate';
import Box from '@mui/material/Box';

export default function YakuSubmitButton(props) {
    const { setVisibleYakuField, setVisibleFuField, setVisibleResultField,
        oyaKo, menzenFuuro, tsumoRon, han, setFu, setTotalPoint, setIsAll,
        yakuman, isChiitoitsu, isPinfu, setNaniman,
        setOyaKoRadioGroupError,
        setMenzenFuuroRadioGroupError,
        setTsumoRonRadioGroupError } = props;

    function filedControleFromYaku() {
        setVisibleYakuField(false);
        if (yakuman > 0 || isChiitoitsu || isPinfu || han >= 5) {
            setVisibleResultField(true);
        } else {
            setVisibleFuField(true);
        }
    }

    function roundUp10(num) {
        return Math.ceil(num / 100) * 100;
    }

    function branchCalculateOyaKoTsumoRon() {
        if (oyaKo == '親') {
            if (tsumoRon == 'ツモ') {
                setTotalPoint(roundUp10(basicPoint * 2));
            } else {
                setTotalPoint(roundUp10(basicPoint * 6));
            }
        } else {
            if (tsumoRon == 'ツモ') {
                setTotalPoint(roundUp10(basicPoint) + '/' + roundUp10(basicPoint * 2));
            } else {
                setTotalPoint(roundUp10(basicPoint * 4));
            }
        }
    }

    let basicPoint;
    function calculatePointOverMangan() {
        if (han <= 5) {
            basicPoint = 2000;
            setNaniman('満貫');
        } else if (han <= 7) {
            basicPoint = 3000;
            setNaniman('跳満');
        } else if (han <= 10) {
            basicPoint = 4000;
            setNaniman('倍満');
        } else if (han <= 12) {
            basicPoint = 6000;
            setNaniman('三倍満');
        } else if (han >= 13) {
            basicPoint = 8000;
            setNaniman('数え役満');
        }

        branchCalculateOyaKoTsumoRon();
    }

    function calculateYakuman() {
        basicPoint = 8000;
        basicPoint *= yakuman;
        if (yakuman == 1) {
            setNaniman('役満');
        } else {
            setNaniman(yakuman + '倍役満');
        }

        branchCalculateOyaKoTsumoRon();
    }

    function calculateChiitoitsu() {
        basicPoint = 100;
        for (let i = 0; i < han; i++) {
            basicPoint *= 2;
        }
        setFu(25);

        branchCalculateOyaKoTsumoRon();
    }

    function calculatePinfu() {
        if (menzenFuuro == '門前' && tsumoRon == 'ロン') {
            basicPoint = 120;
            setFu(30);
        } else {
            basicPoint = 80;
            setFu(20);
        }

        for (let i = 0; i < han; i++) {
            basicPoint *= 2;
        }

        branchCalculateOyaKoTsumoRon();
    }

    function calculateBranch() {
        if (yakuman > 0) {
            calculateYakuman();
        } else if (han >= 5) {
            calculatePointOverMangan();
        } else if (isChiitoitsu) {
            calculateChiitoitsu();
        } else if (isPinfu) {
            calculatePinfu();
        } else {
            initFu();
        }
    }

    function windowScrollTop(){
        window.scroll({
            top: 0,
            behavior: "smooth",
          });
    }

    function yakuSubmitClick() {
        windowScrollTop();
        if (oyaKo == '') {
            setOyaKoRadioGroupError(true);
            return 1;
        } else if (menzenFuuro == '') {
            setMenzenFuuroRadioGroupError(true);
            return 1;
        } else if (tsumoRon == '') {
            setTsumoRonRadioGroupError(true);
            return 1;
        }

        if (oyaKo == '親' && tsumoRon == 'ツモ') {
            setIsAll(true);
        }

        filedControleFromYaku();
        calculateBranch();
    }

    function initFu() {
        setFu(20);
        if (tsumoRon == 'ツモ') {
            setFu(fu => fu + 2);
        } else if (menzenFuuro == '門前') {
            setFu(fu => fu + 10);
        }
    }


    return (
        <Box position='fixed' right='1rem' zIndex='100'
            sx={{
                "@media screen and (max-width:720px)": {
                    position: "static",
                },
            }}
        >
            <Button variant='contained' sx={{ mt: 1, mb: 3, ml: 1 }} onClick={yakuSubmitClick}>
                <Box display='flex' flexDirection='column'>
                    <CalculateIcon sx={{ width: '4rem', height: '4rem' }} />
                    <div>計算する</div>
                </Box>
            </Button>
        </Box>
    )
}
