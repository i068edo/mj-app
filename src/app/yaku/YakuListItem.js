import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CenterFocusStrong } from '@mui/icons-material';

export default function YakuListItem( props ) {
    const { key, yaku, han,  setHan, yakuList, setYakuList } = props;
    
/*     const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        if(checked){
            setHan(han+1);
        }else{
            
        }
    }; */


    return (
        <div>
            <Grid item xs={12}  sx={{width: 300}}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={yaku} />
                        <Checkbox /* checked={checked} onChange={handleChange} */
                        /*  inputProps={{ 'aria-label': 'controlled' }} */
                        />
                    </ListItemButton>
                </ListItem>
            </Grid>
        </div>
    )
}