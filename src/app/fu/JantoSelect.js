import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function JantoSelect( props ) {
    const {fu, setFu} = props;

    const [selectedFu, setSelectedFu] = useState();

    const [preselectedFu, setPreselectedFu] = useState();
    
    const handleUpdate = (event) => {
        if(preselectedFu == null){
            setFu(fu + event.target.value);
            setPreselectedFu(event.target.value);
        }else{
            setFu(fu - preselectedFu + event.target.value);
            setPreselectedFu(event.target.value);
        }
    };

    return (
        <Select
            value={selectedFu} 
            onChange={handleUpdate} 
            displayEmpty
            sx={{ mb: 3 }}
        >
            <MenuItem value={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>数牌</span><span>0符</span>
            </MenuItem>
            <MenuItem value={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>オタ牌</span><span>0符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>自場風牌</span><span>2符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>三元牌</span><span>2符</span>
            </MenuItem>
            
        </Select>
    )
}