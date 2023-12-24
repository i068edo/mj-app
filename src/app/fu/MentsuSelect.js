import * as React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function MentsuSelect( props ) {
    const {fu, setFu} = props;
    const [selectedMentsu, setSelectedMentsu] = useState();
    const mentsuObj = {'シュンツ': 0, '2〜8のポン': 2, '2〜8のアンコー': 4,
        '1・9、字牌のポン': 4, '1・9、字牌のアンコー': 8,
        '2〜8の明カン': 8, '2〜8の暗カン': 16, '1・9、字牌の明カン': 16, '1・9、字牌の暗カン': 32};
    const mentsuList = ['シュンツ', '2〜8のポン', '2〜8のアンコー',
    '1・9、字牌のポン', '1・9、字牌のアンコー',
    '2〜8の明カン', '2〜8の暗カン', '1・9、字牌の明カン', '1・9、字牌の暗カン'];
    let preSelectedFu = props.preSelectedFu;
    
    const mentsuSelect = (event) => {
        console.log(preSelectedFu);
        const thisValue = event.target.value;
        setSelectedMentsu(thisValue);
        
        if( preSelectedFu > 0 ){
            setFu(fu => fu + mentsuObj[thisValue] - preSelectedFu);
        }else{
            setFu(fu => fu + mentsuObj[thisValue]);
        }
        console.log('hoge');
        preSelectedFu = mentsuObj[thisValue];
        
        console.log(preSelectedFu);
    }; 
    
    return (
        <Select
            value={selectedMentsu} 
            onChange={mentsuSelect} 
            displayEmpty
            sx={{ mb: 3 }}
        >
            <MenuItem value={mentsuList[0]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>シュンツ</span><span>0符</span>
            </MenuItem>
            <MenuItem value={mentsuList[1]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8のポン</span><span>2符</span>
            </MenuItem>
            <MenuItem value={mentsuList[2]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8のアンコー</span><span>4符</span>
            </MenuItem>
            <MenuItem value={mentsuList[3]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌のポン</span><span>4符</span>
            </MenuItem>
            <MenuItem value={mentsuList[4]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌のアンコー</span><span>8符</span>
            </MenuItem>
            <MenuItem value={mentsuList[5]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8の明カン</span><span>8符</span>
            </MenuItem>
            <MenuItem value={mentsuList[6]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>2〜8の暗カン</span><span>16符</span>
            </MenuItem>
            <MenuItem value={mentsuList[7]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌の明カン</span><span>16符</span>
            </MenuItem>
            <MenuItem value={mentsuList[8]} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>1・9、字牌の暗カン</span><span>32符</span>
            </MenuItem>
        </Select>
    )
}