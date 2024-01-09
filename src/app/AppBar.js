import * as React from 'react';
const { useState } = React;
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { yellow, lime, green } from '@mui/material/colors';
import QuestionModal from './QuestionModal';
import InfoModal from './InfoModal';
import { Noto_Serif_JP } from "next/font/google";

const NotoSerifJP = Noto_Serif_JP({ weight: "300", subsets: ["latin"] });

export default function ButtonAppBar() {
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const handleOpenQuestionModal = () => setQuestionModalOpen(true);
  const handleCloseQuestionModal = () => setQuestionModalOpen(false);

  const [infoModalOpen, setinfoModalOpen] = useState(false);
  const handleOpenInfoModal = () => setinfoModalOpen(true);
  const handleCloseInfoModal = () => setinfoModalOpen(false);

  function resetButtonClick() {
    window.location.reload();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Box sx={{ flexGrow: 1, mb: 10 }} >

      <AppBar position='fixed' color='primary' enableColorOnDark >
        <Box display='flex' justifyContent='space-between' sx={{ ml: 2, mr: 2 }}>

          <div>

            <IconButton onClick={handleOpenInfoModal}>
              <InfoOutlinedIcon fontSize="large" color='secondary' />
            </IconButton>

            <Button onClick={resetButtonClick}>
              <Typography variant="h6" component="div" color='font' /* fontWeight='bold' */ sx={{fontFamily: "NotoSerifJP"}}>
                まーじゃんけいさん麻雀計算
              </Typography>
            </Button>

          </div>

          <IconButton onClick={handleOpenQuestionModal}>
            <QuestionMarkRoundedIcon fontSize="large" color='secondary' />
          </IconButton>

        </Box>

        <InfoModal {...{ infoModalOpen, handleCloseInfoModal }} />
        <QuestionModal {...{ questionModalOpen, handleOpenQuestionModal, handleCloseQuestionModal }} />


      </AppBar>
    </Box>
  );
}