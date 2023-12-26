import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function JantoSelect( props ) {
    const {fu, setFu} = props;
    const [selectedJanto, setSelectedJanto] = useState();
    const jantoObj = { '数牌': 0, 'オタ牌': 0, '自場風牌': 2, '三元牌': 2 };
    const jantoList = [ '数牌', 'オタ牌', '自場風牌' , '三元牌' ];
    
    const jantoSelect = (event) => {
        const thisValue = event.target.value;
        const preSelectedJanto = selectedJanto;
        setSelectedJanto(thisValue);
        
        if( preSelectedJanto == undefined ){
            setFu( fu => fu + jantoObj[thisValue] );
        }else if(  !( thisValue == preSelectedJanto ) ){

            setFu( fu => fu + jantoObj[thisValue] - jantoObj[preSelectedJanto] );
        }
    };

    return (
        <Select
            value={selectedJanto} 
            onChange={jantoSelect} 
            displayEmpty
            sx={{ mb: 3 }}
        >
            <MenuItem value={jantoList[0]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>数牌</span><span>0符</span>
            </MenuItem>
            <MenuItem value={jantoList[1]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>オタ牌</span><span>0符</span>
            </MenuItem>
            <MenuItem value={jantoList[2]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>自場風牌</span><span>2符</span>
            </MenuItem>
            <MenuItem value={jantoList[3]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>三元牌</span><span>2符</span>
            </MenuItem>
            
        </Select>
    )
}