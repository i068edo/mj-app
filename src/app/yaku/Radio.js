import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';


export function OyaKoRadioGroup( props ) {
  const { oyaKo, setOyaKo, oyaKoRadioGroupError, setOyaKoRadioGroupError } = props;
  const [helperText, setHelperText] = useState('誰が？');

  const handleChangeOyaKo = (event) => {
    const thisValue = event.target.value;
    setOyaKoRadioGroupError(false);
    setOyaKo(thisValue);
    if( thisValue=='親' ){
      setHelperText('親が');
    }else{
      setHelperText('子が')
    }
  };

  return (
    <FormControl error={oyaKoRadioGroupError} >
      <FormLabel>親 or 子</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={oyaKo}
        onChange={handleChangeOyaKo}
      >
        <FormControlLabel value="親" control={<Radio />} label="親" />
        <FormControlLabel value="子" control={<Radio />} label="子" />
        <FormHelperText>{helperText}</FormHelperText>
      </RadioGroup>
    </FormControl>
  );
}

export function MenzenFuuroRadioGroup( props ) {
  const { menzenFuuro, setMenzenFuuro, 
    menzenFuuroRadioGroupError, setMenzenFuuroRadioGroupError } = props;
  const [helperText, setHelperText] = useState('鳴いた？');

  const handleChangeMenzenFuuro = (event) => {
    const thisValue = event.target.value;
    setMenzenFuuroRadioGroupError(false);
    setMenzenFuuro(thisValue);
    if( thisValue=='門前' ){
      setHelperText('鳴かずに');
    }else{
      setHelperText('鳴いて');
    }
  };

  return (
    <FormControl error={menzenFuuroRadioGroupError}>
      <FormLabel id="demo-controlled-radio-buttons-group">鳴き</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={menzenFuuro}
        onChange={handleChangeMenzenFuuro}
      >
        <FormControlLabel value="門前" control={<Radio />} label="門前" />
        <FormControlLabel value="副露" control={<Radio />} label="副露" />
        <FormHelperText>{helperText}</FormHelperText>
      </RadioGroup>
    </FormControl>
  );
}

  export function TsumoRonRadioGroup( props ) {
    const { tsumoRon, setTsumoRon, 
      tsumoRonRadioGroupError, setTsumoRonRadioGroupError } = props;
    const [helperText, setHelperText] = useState('どうやって？');
    
    const handleChangeTsumoRon = (event) => {
      const thisValue = event.target.value;
      setTsumoRonRadioGroupError(false);
      setTsumoRon(thisValue);
      if( thisValue=='ツモ' ){
        setHelperText('ツモあがり');
      }else{
        setHelperText('ロンあがり');
      }
    };
  
    return (
      <FormControl error={tsumoRonRadioGroupError}>
        <FormLabel id="demo-controlled-radio-buttons-group">アガリ</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={tsumoRon}
          onChange={handleChangeTsumoRon}
        >
          <FormControlLabel value="ツモ" control={<Radio />} label="ツモ" />
          <FormControlLabel value="ロン" control={<Radio />} label="ロン" />
          <FormHelperText>{helperText}</FormHelperText>
        </RadioGroup>
      </FormControl>
    );
  }