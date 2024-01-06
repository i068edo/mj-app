import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import YakuListItem from './YakuListItem';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';


export default function YakuList(props) {
  const { han, setHan, yakuList, setYakuList, yakuNameList1,
    yakuNameList2, yakuNameList3, yakuNameList6,
    yakumanNameList, yakumanNameList2,
    yakuman, setYakuman, isPinfu, setIsPinfu , isChiitoitsu, setIsChiitoitsu} = props;


  return (
    <Box sx={{ml:1}}>
      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="一飜">
          <Typography gutterBottom variant="h5" component="div" color='primary' >一飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information' >成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList1.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={1}
                {...{ han, setHan, yakuList, setYakuList, isPinfu, setIsPinfu }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="二飜">
          <Typography gutterBottom variant="h5" component="div" color='primary'>二飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information' >成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList2.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={2}
                {...{ han, setHan, yakuList, setYakuList, isChiitoitsu, setIsChiitoitsu }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="三飜">
          <Typography gutterBottom variant="h5" component="div" color='primary'>三飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information' >成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList3.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={3}
                {...{ han, setHan, yakuList, setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="六飜">
          <Typography gutterBottom variant="h5" component="div" color='primary'>六飜役</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information'>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakuNameList6.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} hanCount={6}
                {...{ han, setHan, yakuList, setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>
 
      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="役満">
          <Typography gutterBottom variant="h5" component="div" color='primary'>役満</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information'>成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakumanNameList.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} yakumanCount={1}
                {...{ yakuman, setYakuman, yakuList, setYakuList, yakumanNameList}} />
            ))}
          </Grid>
        </nav>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <nav aria-label="２倍役満">
          <Typography gutterBottom variant="h5" component="div" color='primary'>２倍役満</Typography>
          <Typography gutterBottom variant="body1" sx={{mb:3}} color='information' >成立した役を選択して下さい。</Typography>
          <Grid container spacing={2}>
            {yakumanNameList2.map((yaku, index) => (
              <YakuListItem key={index} yaku={yaku} yakumanCount={2}
                {...{ yakuman, setYakuman, yakuList, setYakuList }} />
            ))}
          </Grid>
        </nav>
      </Box>

    </Box>
  );
}