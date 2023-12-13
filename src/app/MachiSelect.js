import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MachiSelect() {
    return (
        <Select
            /* value={age} */
            /* onChange={handleChange} */
            displayEmpty
            sx={{ mb: 3 }}
        >
            <MenuItem value={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>リャンメン</span><span>0符</span>
            </MenuItem>
            <MenuItem value={0} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>シャンポン</span><span>0符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>タンキ</span><span>2符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>カンチャン</span><span>2符</span>
            </MenuItem>
            <MenuItem value={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>ペンチャン</span><span>2符</span>
            </MenuItem>
            
        </Select>
    )
}