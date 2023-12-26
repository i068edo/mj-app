import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import MentsuSelect from './MentsuSelect';
import JantoSelect from './JantoSelect';
import MachiSelect from './MachiSelect';
import FuResult from './FuResult';
import FuSubmitButton from './FuSubmitButton'

export default function FuField(props) {
    const { visibleFuField, setVisibleFuField, visibleResultField, setVisibleResultField,
        fu, setFu, han, tsumoRon, setTotalPoint, oyaKo, menzenFuuro, setNaniman } = props;

    function backButtonClick() {
        window.location.reload();
    }

    return (
        <Box sx={{ m: 2 }} maxWidth={600} >
            <Typography gutterBottom variant="h5" component="div">符計算が必要です。</Typography>
            <Typography gutterBottom variant="body1" sx={{ mb: 3 }}>あてはまるものをリストから選んでください。</Typography>

            <Grid container spacing={2}>
                <Grid item display='flex' flexDirection='column' width={300}>
                    <FormLabel>メンツ</FormLabel>
                    <MentsuSelect {...{ fu, setFu }} />
                    <MentsuSelect {...{ fu, setFu }} />
                    <MentsuSelect {...{ fu, setFu }} />
                    <MentsuSelect {...{ fu, setFu }} />
                </Grid>
                <Grid item display='flex' flexDirection='column' width={300}>
                    <FormLabel>雀頭</FormLabel>
                    <JantoSelect {...{ fu, setFu }} />
                    <FormLabel>待ちの形</FormLabel>
                    <MachiSelect {...{ fu, setFu }} />
                </Grid>
            </Grid>

            <Box display='flex' alignItems='flex-end' justifyContent='space-between' sx={{ position: "sticky", bottom: 0 }}>
                <FuSubmitButton {...{
                    setVisibleFuField, setVisibleResultField,
                    fu, setFu, han, tsumoRon, setTotalPoint, oyaKo, setNaniman
                }} />
                <FuResult {...{ fu }} />
            </Box>



        </Box>
    )
}