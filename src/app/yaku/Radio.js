import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export function OyaKoRadioGroup( props ) {
  const { oyaKo, setOyaKo } = props;
  const handleChangeOyaKo = (event) => {
    setOyaKo(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">親 or 子</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={oyaKo}
        onChange={handleChangeOyaKo}
      >
        <FormControlLabel value="親" control={<Radio />} label="親" />
        <FormControlLabel value="子" control={<Radio />} label="子" />
      </RadioGroup>
    </FormControl>
  );
}

export function MenzenFuuroRadioGroup( props ) {
  const { menzenFuuro, setMenzenFuuro } = props;
  const handleChangeMenzenFuuro = (event) => {
    setMenzenFuuro(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">鳴き</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={menzenFuuro}
        onChange={handleChangeMenzenFuuro}
      >
        <FormControlLabel value="門前" control={<Radio />} label="門前" />
        <FormControlLabel value="副露" control={<Radio />} label="副露" />
      </RadioGroup>
    </FormControl>
  );
}

  export function TsumoRonRadioGroup( props ) {
    const { tsumoRon, setTsumoRon } = props;
    const handleChangeTsumoRon = (event) => {
      setTsumoRon(event.target.value);
    };
  
    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">アガリ</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={tsumoRon}
          onChange={handleChangeTsumoRon}
        >
          <FormControlLabel value="ツモ" control={<Radio />} label="ツモ" />
          <FormControlLabel value="ロン" control={<Radio />} label="ロン" />
        </RadioGroup>
      </FormControl>
    );
  }