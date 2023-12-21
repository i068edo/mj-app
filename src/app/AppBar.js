import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { yellow } from '@mui/material/colors';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 , mb:10}} >
      <AppBar position='fixed' color='info' enableColorOnDark >
        <Toolbar>
    



          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            まーじゃんけいさん
          </Typography>

          <IconButton >
            < QuestionMarkRoundedIcon fontSize="large"  sx={{color: yellow[500]}} />
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}