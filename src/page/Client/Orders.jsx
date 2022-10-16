import {Box, Button, Stack, Tab, Tabs, TextField} from "@mui/material";
import React from "react";

import dayjs from 'dayjs';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {StaticDatePicker} from '@mui/x-date-pickers/StaticDatePicker';
import TabPanel from "../../components/TabPanel";
import {Link, useNavigate} from "react-router-dom";

function Orders(props) {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(dayjs('2022-04-07'));

    return (
        <Box sx={{
            background: 'rgb(255,182,53);',
            background: 'linear-gradient(180deg, rgba(255,182,53,0.1) 0%, rgba(255,255,255,1) 100%);',
            height: '94vh',
        }}>
            <Box sx={{display: 'flex', pt: 30, px: 4, justifyContent: "space-between"}}>
                <Box sx={{display: 'flex', flexDirection: 'column', mt: 4}}>
                    <Box sx={{mb: 3}}>
                        <TextField type="date" margin="normal" fullWidth name="datetime" sx={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid black',
                            borderRadius: '0px'
                        }}/>
                        <Stack justifyContent="space-between" sx={{mt: 1}} direction="row">
                            <Button sx={{backgroundColor: '#D9D9D9', color: '#000000', width: '150px'}}
                                    variant="contained">Очистить</Button>
                            <Button sx={{backgroundColor: '#FFB635', color: '#000000', fontWeight: 'bold', width: '150px'}}
                                    variant="contained">Найти</Button>
                        </Stack>
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{width: '70%'}}>
                    <Tabs aria-label="basic tabs example">
                        <Tab sx={{backgroundColor: '#FFB635', fontWeight: 'bold'}} label="Активные заказы"/>
                        <Tab sx={{backgroundColor: '#D9D9D9'}} label="Все заказы"/>
                    </Tabs>
                    <Box sx={{height: '100%', width: '100%', backgroundColor: '#FFFFFF', border: '1px solid #FFB635'}}>
                        <TabPanel index={0}>
                            Item One
                        </TabPanel>
                        <TabPanel index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
                </Box>
            </Box>
            <Button sx={{
                position: 'fixed',
                top: '15%',
                backgroundColor: 'rgba(55, 57, 54, 0.5);',
                width: '300px',
                height: '50px',
                color: '#FFFFFF',
                textAlign: 'center',
                verticalAlign: 'middle',
                display: 'table-cell',
                zIndex: '3'
            }}>чат с поддержкой</Button>
            <div className="w-100 flex items-center block-arrow order-block-arrow">
                <div className="polygon"/>
                <span className="black arrow-text order-block-arrow-text">История заказов</span>
            </div>
        </Box>
    );
}

export default Orders;