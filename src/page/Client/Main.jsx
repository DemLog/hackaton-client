import {AppBar, Box, Button, Container, FormControl, InputLabel, Select, TextField, Typography} from "@mui/material";
import { YMaps, Map, ObjectManager } from 'react-yandex-maps';
import React from "react";


function Main(props) {
    const map = React.useRef(null);

    return (
        <Box>
            <AppBar position="static" sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                boxShadow: 'none',
                backgroundColor: '#ffb635'
            }}>
                <Box sx={{height: '6vh'}}>
                </Box>
            </AppBar>
            <Box sx={{display: 'flex'}}>
                <Box sx={{
                    width: '50%',
                    background: 'rgb(255,182,53);',
                    background: 'linear-gradient(180deg, rgba(255,182,53,0.1) 0%, rgba(255,255,255,1) 100%);',
                    height: '94vh',
                    boxShadow: 4,
                    zIndex: '2'
                }}>
                    <Box sx={{p: 8}}>
                        <Typography variant="h2" sx={{fontWeight: 'bold'}}>Заказать</Typography>
                        <Box sx={{mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">тип машины</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                </Select>
                            </FormControl>
                            <TextField margin="normal" fullWidth label="дд.мм.гггг" name="password" sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <TextField margin="normal" fullWidth label="откуда" name="password" sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <TextField margin="normal" fullWidth label="куда" name="password" sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <TextField margin="normal" fullWidth label="на какое время??" name="password" sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <Button sx={{
                                mt: 2,
                                width: '60%',
                                height: '60px',
                                backgroundColor: '#FFB635',
                                color: '#000000',
                                borderRadius: '18px',
                                fontWeight: 'bold'
                            }} fullWidth variant="contained">
                                Заказать
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box id="customMap" sx={{width: '50%', backgroundColor: '#D9D9D9', height: '94vh'}}>
                    <YMaps //обертка для карты
                        query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты
                            ns: 'use-load-option',
                            apikey: 'abaf359a-a103-425a-a141-9fa108cd0bf4',
                            load: 'package.full'
                        }}
                    >
                        <Map
                            width="100%"
                            height="94vh"
                            state={{
                                center: [65, 100], //центр карты
                                zoom: 3, //масштаб
                                controls: ['zoomControl', 'fullscreenControl'] //контролы. Оставили кнопки для увеличения и кнопку полного экрана
                            }}
                            options={{
                                suppressMapOpenBlock: true, //скрываем метку "Открыть в яндекс картах"
                            }}
                            instanceRef={yaMap => {
                                if(yaMap) {
                                    //console.log(yaMap)
                                    map.current = yaMap;
                                    yaMap.controls.get('zoomControl').options.set({size: 'small'});
                                }
                            }}
                        >
                        </Map>
                    </YMaps>
                </Box>
            </Box>
            <Button sx={{
                position: 'fixed',
                bottom: '0px',
                backgroundColor: 'rgba(55, 57, 54, 0.5);',
                width: '300px',
                height: '50px',
                color: '#FFFFFF',
                textAlign: 'center',
                verticalAlign: 'middle',
                display: 'table-cell',
                zIndex: '3'
            }}>чат с поддержкой</Button>
        </Box>
    );
}

export {Main};