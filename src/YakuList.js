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
              <ListItemText primary="自風牌（トン・ナン・シャー・ペー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="場風牌（トン・ナン・シャー・ペー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="白（ハク）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="發（ハツ）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="中（チュン）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="平和（ピンフ）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="一盃口（イーペーコー）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="槍槓（チャンカン）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="嶺上開花（リンシャン）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="海底摸月(ハイテイ)"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem> 

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="河底撈魚（ホウテイ）"/>
                <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

           <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="一発（イッパツ）"/>
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

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="三色同刻（サンショクドーコー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="三槓子（サンカンツ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="対々和（トイトイ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="三暗刻（サンアンコー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="小三元（ショーサンゲン）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="混老頭（ホンロートー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="七対和（チートイ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="混全帯么九（チャンタ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="混全帯么九（チャンタ） 食い下がり一飜" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="一気通貫（イッツー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="一気通貫（イッツー） 食い下がり一飜" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="三色同順（サンショクドウジュン）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="三色同順（サンショクドウジュン）食い下がり一飜" />
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

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="純全帯么九（ジュンチャン）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="純全帯么九（ジュンチャン）食い下がり一飜 " />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="混一色（ホンイツ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="混一色（ホンイツ） 食い下がり一飜" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>

      <Divider />
      <nav aria-label="六飜">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="清一色（チンイツ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="清一色（チンイツ） 食い下がり一飜" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>


        </List>
      </nav>

      <Divider />
      <nav aria-label="満貫">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="流し満貫（ナガシマンガン）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>

      <Divider />
      <nav aria-label="役満">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="天和（テンホー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="地和（チーホー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="大三元（ダイサンゲン）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="四暗刻（スーアンコウ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="字一色（ツーイーソー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="緑一色（リューイーソー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="清老頭（チンロートー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="国士無双（コクシムソウ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="小四喜（ショウスーシー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="四槓子（スーカンツ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="九蓮宝燈（チューレン ポートー）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>

      <Divider />
      <nav aria-label="ダブル役満">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="四暗刻単騎（スーアンコウタンキ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="国士無双十三面待ち（コクシムソウジュウサンメンマチ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="純正九蓮宝燈（チューレンキュウメンマチ）" />
              <Checkbox /* checked="true" onChange={handleChange} 
                        inputProps={{ 'aria-label': 'controlled' }} */
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="大四喜（ダイスーシー）" />
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