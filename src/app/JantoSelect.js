import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function JantoSelect() {
    return (
        <Select
            /* value={age} */
            /* onChange={handleChange} */
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