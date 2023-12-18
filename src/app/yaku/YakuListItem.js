import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CenterFocusStrong } from '@mui/icons-material';

export default function YakuListItem( props ) {
    const { key, yaku, hanCount, han, setHan, yakuList, setYakuList, yakuman,yakumanCount, setYakuman} = props;
    const [checked, setChecked] = useState(false);
    const kuisagariYakuList = [
        "混全帯么九（チャンタ） 食い下がり一飜　",
        "一気通貫（イッツー） 食い下がり一飜　",
        "三色同順（サンショクドウジュン）食い下がり一飜　",
        "純全帯么九（ジュンチャン）食い下がり一飜　",
        "混一色（ホンイツ） 食い下がり一飜　",
        "清一色（チンイツ） 食い下がり一飜　"
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

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if(isKuisagari){
            if(checked){
                setHan(han - hanCount+1);
                removeYakuListItem();
            }else{
                setHan(han + hanCount-1);      
                setYakuList([...yakuList, yaku]);
            }
        }else if(isYakuman){
            if(checked){
                setYakuman(yakuman - yakumanCount);
                removeYakuListItem();
            }else{
                setYakuman(yakuman + yakumanCount);      
                setYakuList([...yakuList, yaku]);
            }
        }else if(isTwoYakuman){
            if(checked){
                setYakuman(yakuman - yakumanCount);
                removeYakuListItem();
            }else{
                setYakuman(yakuman + yakumanCount);      
                setYakuList([...yakuList, yaku]);
            }
        }else{
            if(checked){
                setHan(han - hanCount);
                removeYakuListItem();
            }else{
                setHan(han + hanCount);      
                setYakuList([...yakuList, yaku]);
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
                    <ListItemButton>
                        <ListItemText primary={yaku} />
                        <Checkbox checked={checked} onChange={handleChange}
                        /*  inputProps={{ 'aria-label': 'controlled' }} */
                        />
                    </ListItemButton>
                </ListItem>
            </Grid>
        </div>
    )
}