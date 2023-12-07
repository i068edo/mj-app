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


export default function YakuList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <nav aria-label="一飜">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="立直（リーチ）" />
              <Checkbox checked="true" /* onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="断么九（タンヤオ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="門前清自摸和（ツモ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ドラ" />
              <TextField id="ドラの数" label="ドラの数" type="number" variant="standard" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      <Divider />
      <nav aria-label="二飜">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="ダブル立直（ダブルリーチ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      <Divider />
      <nav aria-label="三飜">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="二盃口（リャンペーコー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>

      <Button variant="contained" sx={{mt:1, mb:3}}>送信する</Button>
    </Box>
  );
}