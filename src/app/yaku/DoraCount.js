import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function DoraCount(props) {
  const { han, setHan, yakuList, setYakuList, dora, setDora} = props;

  function updateDora(event){
    setDora(event.target.value);
  }

  function doraConfirm(){
    setHan(han + Number(dora));
    const doraName = 'ドラ ' + dora;      
    setYakuList([...yakuList, doraName]);
  }

  return (
    <Box sx={{ mt: 1 }}>

      {/* <Typography gutterBottom variant="body1" 
                  sx={{mt:1, mb:1}}
                  color='secondary' >ドラの数は右下の飜数に加算されません。</Typography> */}
              
      <TextField id="ドラの数"
                 label="ドラの数"
                 type="number"
                 variant="filled"
                 color="secondary" 
                 value={dora}
                 onChange={updateDora}
                 sx={{ mb:1, width: 130 }}
                 
                 
    />

    <div><Button variant="outlined"  onClick={doraConfirm} color="secondary">ドラの数を確定</Button></div>
    

    </Box>
  )
}