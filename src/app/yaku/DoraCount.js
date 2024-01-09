import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function DoraCount(props) {
  const { han, setHan, yakuList, setYakuList, dora, setDora } = props;
  const [doraError, setDoraError] = useState(false);
  const [helperText, setHelperText] = useState('');


  function updateDora(event) {
    setDora(event.target.value);
  }

  function confirmDora() {
    if (!(dora > 0)) {
      setDoraError(true);
      setHelperText('不正な値です。')
      return 1;
  }else if( yakuList.some(item => item.includes('ドラ')) ){
      setDoraError(true);
      setHelperText('ドラは既に入力されています。')
      return 1;
  }
    setDoraError(false);
    setHelperText('OK');
    setHan(han + Number(dora));
    const doraName = 'ドラ ' + dora;
    setYakuList([...yakuList, doraName]);
  }

  function deleteDora() {
    if (yakuList.some(item => item.includes('ドラ'))) {
      const yakuWithDora = yakuList.filter(item => item.includes('ドラ'));
      const yakuWithDoraArray = (String(yakuWithDora)).split(' ');
      const yakuWithDoraNumber = Number(yakuWithDoraArray[1]);
      setHan(han - yakuWithDoraNumber);
      const filteredYakuList = yakuList.filter(item => !item.includes('ドラ'));
      setYakuList(filteredYakuList);
    }
  }



  return (
    <Box display='flex' flexDirection='column' width='265px'>
      
      <TextField id="ドラの数"
        label="ドラの数"
        type="number"
        variant="outlined"
        color="primary"
        value={dora}
        onChange={updateDora}
        error={doraError}
        helperText={helperText}
        sx={{ mt: 1, mb: 1 }}
      />

      <ButtonGroup variant="outlined" color="primary">
        <Button onClick={confirmDora} >ドラの数を確定</Button>
        <Button onClick={deleteDora} >ドラの数を削除</Button>
      </ButtonGroup>

    </Box>
  )
}