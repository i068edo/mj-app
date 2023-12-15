import * as React from 'react';
import { useState } from 'react';
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
import YakuListItem from './YakuListItem';
import Typography from '@mui/material/Typography';


export default function YakuList(props) {
  const { han, setHan, yakuList, setYakuList, yakuNameList1,
    yakuNameList2, yakuNameList3, yakuNameList6,
     yakumanNameList, yakumanNameList2 } = props;


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="一飜">
          <Typography gutterBottom variant="h5" component="div">一飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}}>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList1.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={1}
                {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="二飜">
          <Typography gutterBottom variant="h5" component="div">二飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}}>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList2.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={2}
                {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="三飜">
          <Typography gutterBottom variant="h5" component="div">三飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}}>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList3.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={3}
                {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="六飜">
          <Typography gutterBottom variant="h5" component="div">六飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}}>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList6.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={6}
                {...{ han: han, setHan: setHan, yakuList: yakuList, setYakuList: setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

      

{/*           <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ドラ" />
              <TextField id="ドラの数" label="ドラの数" type="number" variant="standard" />
            </ListItemButton>
          </ListItem>
 */}
       

    </div>
  );
}