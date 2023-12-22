import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

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
    <Box display='flex' flexDirection='column' alignItems='flex-start'>
      <TextField id="ドラの数"
                 label="ドラの数"
                 type="number"
                 variant="outlined"
                 color="secondary" 
                 value={dora}
                 onChange={updateDora}
                 sx={{ width: 100, m:1 }}
                 
                 
    />

      <ButtonGroup variant="outlined" color="secondary">
        <Button onClick={confirmDora} >ドラの数を確定</Button>
        <Button onClick={deleteDora} >ドラの数を削除</Button>
      </ButtonGroup>
    
    

    </Box>
  )
}