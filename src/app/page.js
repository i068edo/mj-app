"use client"
import * as React from 'react';
import { useState } from 'react';

import AppBar from './AppBar';
import YakuField from './YakuField';
import FuField from './FuField';
import ResultField from './ResultField';

function ParentField( visibleYakuField, setVisibleYakuField,
                      visibleFuField, setVisibleFuField,
                      visibleResultField, setVisibleResultField ){

  const [oyaKo, setOyaKo] = useState('oya');
  const [menzenFuuro, setMenzenFuuro] = useState('menzen');
  const [tsumoRon, setTsumoRon] = useState('tsumo');
  const [han, setHan] = useState(0);
  const [fu, setFu] = useState(0);
  const [honba, setHonba] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [isYakuman, setIsYakuman] = useState(false);
  const [isChiitoitsu, setIsChiitoitsu] = useState(false);
  const [isPinfu, setIsPinfu] = useState(false);
  const [yakuList, setYakuList] = useState(['']);
  

  return (
    <div>
      {/* <YakuField /> */}
      <FuField />
      <ResultField />
    </div>
  )
  
}


export default function Home() {
  const [visibleYakuField, setVisibleYakuField] = useState(true);
  const [visibleFuField, setVisibleFuField] = useState(true);
  const [visibleResultField, setVisibleResultField] = useState(true);
  
  return (
    <main className="body">
      <AppBar />
      
      <ParentField 
        visibleYakuField={{visibleYakuField}} 
        setVisibleYakuField={{setVisibleYakuField}}
        visibleFuField={{visibleFuField}}
        setVisibleFuField={{setVisibleFuField}}
        visibleResultField={{visibleResultField}}
        setVisibleResultField={{setVisibleResultField}} 
      />
    </main>
  )
}