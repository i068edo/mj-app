import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MachiSelect( props ) {
    const {fu, setFu} = props;
    const [selectedMachi, setSelectedMachi] = useState();
    const machiObj = { 'リャンメン': 0, 'シャンポン': 0, 'タンキ': 2, 'カンチャン': 2, 'ペンチャン': 2, };
    const machiList = [ 'リャンメン', 'シャンポン', 'タンキ', 'カンチャン', 'ペンチャン' ];

    const machiSelect = (event) => {
        const thisValue = event.target.value;
        const preSelectedMachi = selectedMachi;
        setSelectedMachi(thisValue);
        
        if( preSelectedMachi == undefined ){
            setFu( fu => fu + machiObj[thisValue] );
        }else if(  !( thisValue == preSelectedMachi ) ){

            setFu( fu => fu + machiObj[thisValue] - machiObj[preSelectedMachi] );
        }
    };
    
    return (
        
        <Select
            value= {selectedMachi}
            onChange={machiSelect}
            displayEmpty
            sx={{ mb: 3 }}
        >
            <MenuItem value={machiList[0]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>リャンメン</span><span>0符</span>
            </MenuItem>
            <MenuItem value={machiList[1]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>シャンポン</span><span>0符</span>
            </MenuItem>
            <MenuItem value={machiList[2]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>タンキ</span><span>2符</span>
            </MenuItem>
            <MenuItem value={machiList[3]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>カンチャン</span><span>2符</span>
            </MenuItem>
            <MenuItem value={machiList[4]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>ペンチャン</span><span>2符</span>
            </MenuItem>
            
        </Select>
    )
}