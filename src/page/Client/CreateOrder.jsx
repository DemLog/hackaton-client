import React from "react";
import {motion} from "framer-motion";
import {AppBar, Box, Button, FormControl, InputLabel, Select, TextField, Typography} from "@mui/material";
import {Map, YMaps} from "react-yandex-maps";

import './triangle.css';
import {useNavigate} from "react-router-dom";

function CreateOrder(props) {
    const navigate = useNavigate();
    const map = React.useRef(null);
    const [placeMark, setPlaceMark] = React.useState(null);

    const [inputData, setInputData] = React.useState({
        "type_machine": "",
        "datetime": "",
        "placemark": "",
        "coords": [],
        "time": ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData(prevState => ({
            ...prevState, [name]: value
        }));
    };

    return (
        <motion.div
            intial={{height: 0}}
            animate={{height: '100%'}}
            exit={{x: window.innerHeight, transition: {duration: 0.1}}}
        >
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
                            <TextField type="date" margin="normal" fullWidth name="datetime" value={inputData.datetime}
                                       onChange={handleChange} sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <TextField margin="normal" fullWidth label="куда" name="placemark"
                                       value={inputData.placeMark} onChange={handleChange} sx={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid black',
                                borderRadius: '0px'
                            }}/>
                            <TextField type="time" label="время" margin="normal" fullWidth name="time"
                                       value={inputData.time} onChange={handleChange} sx={{
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
                                center: [55.75276173839969, 37.62512207031247], //центр карты
                                zoom: 5, //масштаб
                                controls: ['geolocationControl', 'searchControl'] //контролы. Оставили кнопки для увеличения и кнопку полного экрана
                            }}
                            options={{
                                suppressMapOpenBlock: true, //скрываем метку "Открыть в яндекс картах"
                            }}
                            instanceRef={yaMap => {
                                if (yaMap) {
                                    map.current = yaMap;
                                }
                            }}
                            onLoad={(ymaps) => {
                                let currentPlaceMark = null;
                                map.current.events.add('click', function (e) {
                                    console.log(inputData)
                                    const coords = e.get('coords');

                                    // Если метка уже создана – просто передвигаем ее.
                                    if (currentPlaceMark) {
                                        currentPlaceMark.geometry.setCoordinates(coords);
                                    }
                                    // Если нет – создаем.
                                    else {
                                        currentPlaceMark = createPlacemark(coords);
                                        map.current.geoObjects.add(currentPlaceMark);
                                        currentPlaceMark.events.add('dragend', function () {
                                            getAddress(currentPlaceMark.geometry.getCoordinates());
                                        });
                                        setPlaceMark(currentPlaceMark);
                                    }
                                    getAddress(coords);
                                })

                                function createPlacemark(coords) {
                                    return new ymaps.Placemark(coords, {
                                        iconCaption: 'поиск...'
                                    }, {
                                        preset: 'islands#violetDotIconWithCaption',
                                        draggable: true
                                    });
                                }

                                // Определяем адрес по координатам (обратное геокодирование).
                                function getAddress(coords) {
                                    map.current._globalPixelCenter = coords;
                                    currentPlaceMark.properties.set('iconCaption', 'поиск...');
                                    ymaps.geocode(coords).then(function (res) {
                                        var firstGeoObject = res.geoObjects.get(0);

                                        currentPlaceMark.properties
                                            .set({
                                                // Формируем строку с данными об объекте.
                                                iconCaption: [
                                                    // Название населенного пункта или вышестоящее административно-территориальное образование.
                                                    firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                                                    // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                                                    firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                                                ].filter(Boolean).join(', '),
                                                // В качестве контента балуна задаем строку с адресом объекта.
                                                balloonContent: firstGeoObject.getAddressLine()
                                            });
                                        console.log(coords)
                                        setInputData(prevState => ({
                                            ...prevState,
                                            placeMark: currentPlaceMark.properties._data.balloonContent,
                                            coords: coords
                                        }));
                                    });
                                }
                            }}
                        >
                        </Map>
                    </YMaps>
                </Box>
                <div className="w-100 flex items-center block-arrow order-block-arrow">
                    <div className="polygon"/>
                    <span className="black arrow-text order-block-arrow-text">История заказов</span>
                </div>

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
        </motion.div>
    );
}

export {CreateOrder};