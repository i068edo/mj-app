import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppInfo from './AppInfo';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
};

export default function InfoModal(props) {
  const { infoModalOpen, handleCloseInfoModal } = props;

  return (
    <div>
      <Modal
        open={infoModalOpen}
        onClose={handleCloseInfoModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} width='70vw' height='70vh'>
          <AppInfo />
        </Box>
      </Modal>
    </div>
  );
}

