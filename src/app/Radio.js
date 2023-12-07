import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function MenzenFuuroRadioGroup() {
  const [value, setValue] = useState('門前');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">鳴き</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="門前" control={<Radio />} label="門前" />
        <FormControlLabel value="副露" control={<Radio />} label="副露" />
      </RadioGroup>
    </FormControl>
  );
}

export function OyaKoRadioGroup() {
    const [value, setValue] = useState('親');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">親 or 子</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="親" control={<Radio />} label="親" />
          <FormControlLabel value="子" control={<Radio />} label="子" />
        </RadioGroup>
      </FormControl>
    );
  }

  export function TsumoRonRadioGroup() {
    const [value, setValue] = useState('ツモ');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">アガリ</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="ツモ" control={<Radio />} label="ツモ" />
          <FormControlLabel value="ロン" control={<Radio />} label="ロン" />
        </RadioGroup>
      </FormControl>
    );
  }