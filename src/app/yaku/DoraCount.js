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

  function confirmDora(){
    setHan(han + Number(dora));
    const doraName = 'ドラ ' + dora;      
    setYakuList([...yakuList, doraName]);
  }

  function deleteDora(){
    if( yakuList.some(item => item.includes('ドラ')) ){
      const yakuWithDora = yakuList.filter(item => item.includes('ドラ'));
      const yakuWithDoraArray = (String(yakuWithDora)).split(' ');
      const yakuWithDoraNumber = Number(yakuWithDoraArray[1]);
      setHan(han - yakuWithDoraNumber);
      const filteredYakuList = yakuList.filter(item => !item.includes('ドラ'));
      setYakuList(filteredYakuList);
    }
  }



  return (
    <Box sx={{ mt: 1 }} display='flex' flexDirection='row' alignItems='flex-start'>
      <TextField id="ドラの数"
                 label="ドラの数"
                 type="number"
                 variant="outlined"
                 color="secondary" 
                 value={dora}
                 onChange={updateDora}
                 sx={{ width: 100, m:1 }}
                 
                 
    />

    <Box display='flex' flexDirection='column'>
      <Button variant="outlined"  onClick={confirmDora} color="secondary" sx={{m:1}}>ドラの数を確定</Button>
      <Button variant="outlined"  onClick={deleteDora} color="secondary" sx={{m:1}}>ドラの数を削除</Button>
    
    </Box>
    
    

    </Box>
  )
}