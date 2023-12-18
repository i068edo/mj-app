import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MentsuSelect( props ) {
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
                <span>シュンツ</span><span>0符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8のポン</span><span>2符</span>
            </MenuItem>
            <MenuItem value={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8のアンコー</span><span>4符</span>
            </MenuItem>
            <MenuItem value={4} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌のポン</span><span>4符</span>
            </MenuItem>
            <MenuItem value={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌のアンコー</span><span>8符</span>
            </MenuItem>
            <MenuItem value={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8の明カン</span><span>8符</span>
            </MenuItem>
            <MenuItem value={16} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8の暗カン</span><span>16符</span>
            </MenuItem>
            <MenuItem value={16} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌の明カン</span><span>16符</span>
            </MenuItem>
            <MenuItem value={32} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌の暗カン</span><span>32符</span>
            </MenuItem>
        </Select>
    )
}