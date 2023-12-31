import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { EditNote } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';

export default function ResultField(props) {
    const { oyaKo, tsumoRon,  han, fu,  yakuList, totalPoint, isAll, naniman } = props;

    function backButtonClick() {
        window.location.reload();
    }

    return (
        <>
            <Button variant='contained' sx={{ mt: 1, mb: 3, ml: 4 }} onClick={backButtonClick}>はじめに戻る</Button>

            <Box width='80vw' margin='0 auto'>

                <Paper elevation={3} >

                    <Stack divider={<Divider orientation='horizontal' flexItem />} alignItems='center'>

                        <Box display='flex' flexDirection='row' flexWrap='wrap' >
                            {yakuList.map((yaku) => (<Typography gutterBottom variant="h6" sx={{ m: 1 }}>{yaku}</Typography>))}
                        </Box>

                        <div>
                            <Typography gutterBottom variant='subtitle1' color={grey[700]} sx={{ m: 1 }}>合計</Typography>
                            <Stack direction="row" alignItems='flex-end' spacing={2} sx={{ m: 1 }}>
                                <Typography gutterBottom variant="h3">{han} 飜</Typography>
                                <Typography gutterBottom variant="h5">{fu} 符</Typography>
                            </Stack>
                        </div>

                        <Box display='flex' flexDirection='column' sx={{ m: 1 }}>
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' sx={{ ml: 3 }}>
                                <Typography gutterBottom variant="h4" >{naniman}</Typography>
                                <Typography gutterBottom variant="subtitle" color={grey[700]} sx={{ m: 1 }}>{oyaKo}の{tsumoRon}アガリ</Typography>
                            </Box>
                            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' >
                                <Typography gutterBottom variant="h2" >{totalPoint}</Typography>
                                { isAll && 
                                    <Typography gutterBottom variant="h4" sx={{ ml: 1 }} >オール</Typography>
                                }    
                            </Box>
                        </Box>

                    </Stack>


                </Paper>
            </Box>
        </>
    )
}