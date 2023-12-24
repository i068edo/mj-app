import * as React from 'react';
import { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

export default function YakuListItem( props ) {
    const { key, yaku, hanCount, han, setHan, yakuList, setYakuList, yakuman,yakumanCount, setYakuman,
    isPinfu, setIsPinfu,isChiitoitsu,setIsChiitoitsu} = props;
    const [checked, setChecked] = useState(false);

    const kuisagariYakuList = [
        "混全帯么九（チャンタ） 食い下がり一飜 ",
        "一気通貫（イッツー） 食い下がり一飜 ",
        "三色同順（サンショクドウジュン）食い下がり一飜 ",
        "純全帯么九（ジュンチャン）食い下がり一飜 ",
        "混一色（ホンイツ） 食い下がり一飜 ",
        "清一色（チンイツ） 食い下がり一飜 "
    ];
    const oneYakumanNameList = ["天和（テンホー）", "地和（チーホー）",
    "大三元（ダイサンゲン）", "四暗刻（スーアンコウ）", "字一色（ツーイーソー）",
    "緑一色（リューイーソー）", "清老頭（チンロートー）", "国士無双（コクシムソウ）",
    "小四喜（ショウスーシー）", "四槓子（スーカンツ）", "九蓮宝燈（チューレン ポートー）"];

    const twoYakumanNameList = ["四暗刻単騎（スーアンコウタンキ）", "国士無双十三面待ち（コクシムソウジュウサンメンマチ）",
    "純正九蓮宝燈（チューレンキュウメンマチ）", "大四喜（ダイスーシー）"];

    
    const isKuisagari = kuisagariYakuList.includes(yaku);
    const isYakuman = oneYakumanNameList.includes(yaku);
    const isTwoYakuman = twoYakumanNameList.includes(yaku);


    const handleChange = () => {
        const thisChecked = !checked;
        setChecked( thisChecked );
        
        if(isKuisagari){
            if(thisChecked){
                setHan(han + hanCount-1);      
                setYakuList([...yakuList, yaku]);
            }else{
                setHan(han - hanCount+1);
                removeYakuListItem();
            }
        }else if(isYakuman){
            if(thisChecked){
                setYakuman(yakuman + yakumanCount);      
                setYakuList([...yakuList, yaku]);
            }else{
                setYakuman(yakuman - yakumanCount);
                removeYakuListItem();
            }
        }else if(isTwoYakuman){
            if(thisChecked){
                setYakuman(yakuman + yakumanCount);      
                setYakuList([...yakuList, yaku]);
            }else{
                setYakuman(yakuman - yakumanCount);
                removeYakuListItem();
            }
        }else if(yaku=="七対和（チートイ）"){
            if(thisChecked){
                setIsChiitoitsu(true);
                setHan(han + hanCount);
                setYakuList([...yakuList, yaku]);
            }else{
                setIsChiitoitsu(false);
                setHan(han - hanCount);
                removeYakuListItem();
            }
        }else if(yaku==="平和（ピンフ）"){
            if(thisChecked){
                setIsPinfu(true);
                setHan(han + hanCount);
                setYakuList([...yakuList, yaku]);
            }else{
                setIsPinfu(false);
                setHan(han - hanCount);
                removeYakuListItem();
            }
        }else{
            if(thisChecked){
                setHan(han + hanCount);      
                setYakuList([...yakuList, yaku]);
            }else{
                setHan(han - hanCount);
                removeYakuListItem();
            }
        }
    };
   

    function removeYakuListItem(){
        const updatedYakuList = yakuList.filter((yakuListItem) => yakuListItem !== yaku);
        setYakuList(updatedYakuList);
    }


    return (
        <div>
            <Grid item xs={12}  sx={{width: 300}}>
                <ListItem disablePadding>
                    <ListItemButton onClick={handleChange}>
                        <ListItemText primary={yaku} />
                        <Checkbox checked={checked}/*  onChange={handleChange} *//>
                    </ListItemButton>
                </ListItem>
            </Grid>
        </div>
    )
}