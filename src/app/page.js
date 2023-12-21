"use client"
import * as React from 'react';
import { useState } from 'react';

import AppBar from './AppBar';
import YakuField from './yaku/YakuField';
import FuField from './fu/FuField';
import ResultField from './result/ResultField';
import { render } from 'react-dom';

function ParentField(props) {
  const { visibleYakuField, setVisibleYakuField,
    visibleFuField, setVisibleFuField,
    visibleResultField, setVisibleResultField } = props;

  const [oyaKo, setOyaKo] = useState('');
  const [menzenFuuro, setMenzenFuuro] = useState('');
  const [tsumoRon, setTsumoRon] = useState('');
  const [han, setHan] = useState(0);
  const [fu, setFu] = useState(20);
  const [dora, setDora] = useState(0);
  const [honba, setHonba] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const [isYakuman, setIsYakuman] = useState(false);
  const [isChiitoitsu, setIsChiitoitsu] = useState(false);
  const [isPinfu, setIsPinfu] = useState(false);
  const [yakuList, setYakuList] = useState([]);
  const [yakuman, setYakuman] = useState(0);
  const [naniman, setNaniman] = useState('');
  const yakuNameList1 = ["立直（リーチ）", "断么九（タンヤオ）", "門前清自摸和（ツモ）",
    "自風牌（トン・ナン・シャー・ペー）", "場風牌（トン・ナン・シャー・ペー）",
    "白（ハク）", "發（ハツ）", "中（チュン）",
    "平和（ピンフ）", "一盃口（イーペーコー）",
    "槍槓（チャンカン）", "嶺上開花（リンシャン）",
    "海底摸月（ハイテイ）", "河底撈魚（ホウテイ）",
    "一発（イッパツ）"];
  const yakuNameList2 = ["ダブル立直（ダブルリーチ）", "三色同刻（サンショクドーコー）",
    "三槓子（サンカンツ）", "対々和（トイトイ）", "三暗刻（サンアンコー）",
    "小三元（ショーサンゲン）", "混老頭（ホンロートー）", "七対和（チートイ）",
    "混全帯么九（チャンタ）", "混全帯么九（チャンタ） 食い下がり一飜　",
    "一気通貫（イッツー）", "一気通貫（イッツー） 食い下がり一飜　",
    "三色同順（サンショクドウジュン）", "三色同順（サンショクドウジュン）食い下がり一飜　"];
  const yakuNameList3 = ["二盃口（リャンペーコー）", "純全帯么九（ジュンチャン）", "純全帯么九（ジュンチャン）食い下がり一飜　",
    "混一色（ホンイツ）", "混一色（ホンイツ） 食い下がり一飜　"];
  const yakuNameList6 = ["清一色（チンイツ）", "清一色（チンイツ） 食い下がり一飜　"];
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
          visibleYakuField: visibleYakuField, setVisibleYakuField: setVisibleYakuField,
          visibleFuField: visibleFuField, setVisibleFuField: setVisibleFuField, visibleResultField: visibleResultField,
          setVisibleResultField: setVisibleResultField, oyaKo: oyaKo, setOyaKo: setOyaKo, menzenFuuro: menzenFuuro, setMenzenFuuro: setMenzenFuuro,
          tsumoRon: tsumoRon, setTsumoRon: setTsumoRon, han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList,
          yakuNameList1: yakuNameList1, yakuNameList2: yakuNameList2, yakuNameList3: yakuNameList3,
          yakuNameList6: yakuNameList6, yakumanNameList: yakumanNameList, yakumanNameList2: yakumanNameList2,
          totalPoint: totalPoint, setTotalPoint: setTotalPoint, dora: dora, setDora: setDora, yakuman: yakuman, setYakuman: setYakuman,
          isPinfu: isPinfu, setIsPinfu: setIsPinfu,isChiitoitsu: isChiitoitsu, setIsChiitoitsu: setIsChiitoitsu, setNaniman: setNaniman
        }} />
      }
      {visibleFuField &&
       <FuField {...{ 
        visibleFuField: visibleFuField, setVisibleFuField: setVisibleFuField, visibleResultField: visibleResultField,
        setVisibleResultField: setVisibleResultField, fu: fu, setFu: setFu, han: han, tsumoRon: tsumoRon, setTotalPoint: setTotalPoint, oyaKo: oyaKo
      }}/> }
      {visibleResultField &&
        <ResultField  {...{
          oyaKo: oyaKo, tsumoRon: tsumoRon, han: han, yakuList: yakuList, totalPoint: totalPoint, yakuman: yakuman,
          fu: fu, naniman: naniman
        }} />
      }
    </div>
  )

}


export default function Home() {
  const [visibleYakuField, setVisibleYakuField] = useState(true);
  const [visibleFuField, setVisibleFuField] = useState(true);
  const [visibleResultField, setVisibleResultField] = useState(false);

  return (
    <main className="body">
      <AppBar />

      <ParentField {...{
        visibleYakuField: visibleYakuField,
        setVisibleYakuField: setVisibleYakuField,
        visibleFuField: visibleFuField,
        setVisibleFuField: setVisibleFuField,
        visibleResultField: visibleResultField,
        setVisibleResultField: setVisibleResultField
      }}
      />
    </main>
  )
}