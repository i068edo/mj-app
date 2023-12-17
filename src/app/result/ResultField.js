import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function ResultField(props) {
    const { visibleYakuField, setVisibleYakuField, visibleFuField, setVisibleFuField,
        visibleResultField, setVisibleResultField, oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro,
        tsumoRon, setTsumoRon, han, setHan, yakuList, setYakuList, yakuNameList1,
        yakuNameList2, yakuNameList3, yakuNameList6,
        yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint } = props;

    function backButtonClick() {
        /* setVisibleYakuField(true);
        setVisibleResultField(false); */
        window.location.reload();
    }

    return (
        <div>
            <Button variant='contained' sx={{ mt: 1, mb: 3 }} onClick={backButtonClick}>戻る</Button>
            <div>{totalPoint}</div>
        </div>
    )
}