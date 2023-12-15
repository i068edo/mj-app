import * as React from 'react';
import { useState } from 'react';

export default function ResultField( props ){
    const { oyaKo, setOyaKo, menzenFuuro, setMenzenFuuro, tsumoRon, setTsumoRon,
        han, setHan, yakuList, setYakuList, yakuNameList1,
         yakuNameList2, yakuNameList3, yakuNameList6,
          yakumanNameList, yakumanNameList2, totalPoint, setTotalPoint } = props;

    return(
        <div>
            {totalPoint}
        </div>
    )
}