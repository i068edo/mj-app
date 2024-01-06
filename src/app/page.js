"use client"
import * as React from 'react';
import { useState } from 'react';
import {useReducer} from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import AppBar from './AppBar';
import YakuField from './yaku/YakuField';
import FuField from './fu/FuField';
import ResultField from './result/ResultField';
import { render } from 'react-dom';

const theme = createTheme({
  palette: {
    primary: {
      light: '#124116',
      main: '#1b5e20',
      dark: '#487e4c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#af861f',
      main: '#fbc02d',
      dark: '#fbcc57',
      contrastText: '#fff',
    },
    resultDisplay: '#eeeeee',
    font: '#fff',
    information: '#9e9e9e',
  },
});


function ParentField(props) {
  const { visibleYakuField, setVisibleYakuField,
    visibleFuField, setVisibleFuField,
    visibleResultField, setVisibleResultField } = props;

  const [oyaKo, setOyaKo] = useState('');
  const [menzenFuuro, setMenzenFuuro] = useState('');
  const [tsumoRon, setTsumoRon] = useState('');
  const [han, setHan] = useState(0);
  const [fu, setFu] = useState();
  const [dora, setDora] = useState();
  const [totalPoint, setTotalPoint] = useState(0);
  const [isAll, setIsAll] = useState(false);
  const [isChiitoitsu, setIsChiitoitsu] = useState(false);
  const [isPinfu, setIsPinfu] = useState(false);
  const [yakuList, setYakuList] = useState([]);
  const [yakuman, setYakuman] = useState(0);
  const [naniman, setNaniman] = useState('');
  const yakuNameList1 = [
    "立直（リーチ）", "平和（ピンフ）", "一発（イッパツ）", "門前清自摸和（ツモ）",
    "自風牌（トン・ナン・シャー・ペー）", "場風牌（トン・ナン・シャー・ペー）",
    "白（ハク）", "發（ハツ）", "中（チュン）", "断么九（タンヤオ）",
    "一盃口（イーペーコー）",
    "槍槓（チャンカン）", "嶺上開花（リンシャン）",
    "海底摸月（ハイテイ）", "河底撈魚（ホウテイ）"
    ];
  const yakuNameList2 = [
    "七対和（チートイ）", "ダブル立直（ダブルリーチ）", "三色同刻（サンショクドーコー）",
    "三槓子（サンカンツ）", "対々和（トイトイ）", "三暗刻（サンアンコー）",
    "小三元（ショーサンゲン）", "混老頭（ホンロートー）",
    "混全帯么九（チャンタ）", "混全帯么九（チャンタ） 食い下がり一飜 ",
    "一気通貫（イッツー）", "一気通貫（イッツー） 食い下がり一飜 ",
    "三色同順（サンショクドウジュン）", "三色同順（サンショクドウジュン）食い下がり一飜 "];
  const yakuNameList3 = [
    "混一色（ホンイツ）", "混一色（ホンイツ） 食い下がり一飜 ", 
    "純全帯么九（ジュンチャン）", "純全帯么九（ジュンチャン）食い下がり一飜 ",
    "二盃口（リャンペーコー）"];
  const yakuNameList6 = ["清一色（チンイツ）", "清一色（チンイツ） 食い下がり一飜 "];
  const yakumanNameList = ["天和（テンホー）", "地和（チーホー）",
    "大三元（ダイサンゲン）", "四暗刻（スーアンコウ）", "字一色（ツーイーソー）",
    "緑一色（リューイーソー）", "清老頭（チンロートー）", "国士無双（コクシムソウ）",
    "小四喜（ショウスーシー）", "四槓子（スーカンツ）", "九蓮宝燈（チューレン ポートー）"];
  const yakumanNameList2 = ["四暗刻単騎（スーアンコウタンキ）", "国士無双十三面待ち（コクシムソウジュウサンメンマチ）",
    "純正九蓮宝燈（チューレンキュウメンマチ）", "大四喜（ダイスーシー）"];

  return (
    <div>

      {visibleYakuField &&
        <YakuField {...{
          visibleYakuField, setVisibleYakuField,
          visibleFuField,  setVisibleFuField,  visibleResultField,
          setVisibleResultField, oyaKo,  setOyaKo, menzenFuuro, setMenzenFuuro,
           tsumoRon,  setTsumoRon,  han,  setHan,  yakuList,  setYakuList,
           yakuNameList1,  yakuNameList2,  yakuNameList3,
           yakuNameList6, yakumanNameList, yakumanNameList2,
          totalPoint, setTotalPoint, isAll, setIsAll, dora, setDora, yakuman, setYakuman,
          isPinfu, setIsPinfu, isChiitoitsu, setIsChiitoitsu, setNaniman, fu, setFu
        }} />
      }
      {visibleFuField &&
       <FuField {...{ 
        setVisibleFuField, setVisibleResultField,
        fu, setFu, han, tsumoRon, setTotalPoint, oyaKo, setNaniman
      }}/> 
      }
      {visibleResultField &&
        <ResultField  {...{
          oyaKo, tsumoRon, han, yakuList, totalPoint, isAll, yakuman, fu, naniman
        }} />
      }
    </div>
  )

}


export default function Home() {
  const [visibleYakuField, setVisibleYakuField] = useState(true);
  const [visibleFuField, setVisibleFuField] = useState(false);
  const [visibleResultField, setVisibleResultField] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <main className="body">
        <AppBar />
        <ParentField {...{
          visibleYakuField,
          setVisibleYakuField,
          visibleFuField,
          setVisibleFuField,
          visibleResultField,
          setVisibleResultField
        }}/>
      </main>
    </ThemeProvider>   
  )
}