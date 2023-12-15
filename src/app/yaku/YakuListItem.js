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
    const { key, yaku, hanCount, han, setHan, yakuList, setYakuList } = props;
    const [checked, setChecked] = useState(false);
    const kuisagariYakuList = [
        "混全帯么九（チャンタ） 食い下がり一飜",
        "一気通貫（イッツー） 食い下がり一飜",
        "三色同順（サンショクドウジュン）食い下がり一飜",
        "純全帯么九（ジュンチャン）食い下がり一飜",
        "混一色（ホンイツ） 食い下がり一飜",
        "清一色（チンイツ） 食い下がり一飜"
    ];
    const isKuisagari = kuisagariYakuList.includes(yaku);

    const handleChange = (event) => {
        console.log(isKuisagari);
        setChecked(event.target.checked);
        /* if(checked){
            setHan(han - hanCount);
            removeYakuListItem();
            if(isKuisagari){
                setHan(han + 1);
            }
        }else{
            setHan(han + hanCount);      
            setYakuList([...yakuList, yaku]);
            if(isKuisagari){
                setHan(han - 1);
            }
        } */
        if(isKuisagari){
            if(checked){
                setHan(han - hanCount+1);
                removeYakuListItem();
            }else{
                setHan(han + hanCount-1);      
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