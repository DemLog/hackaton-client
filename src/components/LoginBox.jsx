import {Alert, Box, Button, IconButton, InputAdornment, TextField} from "@mui/material";
import React from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import AuthAPI from "../API/AuthAPI";
import {observer} from "mobx-react-lite";

import storeUser from "../store/storeUser";
import {useNavigate} from "react-router-dom";

const LoginBox = observer((props) => {
    const [inputData, setInputData] = React.useState({
        "login": "",
        "password": "",
        "showPassword": false
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData(prevState => ({
            ...prevState, [name]: value
        }));
    };
    const handleClickShowPassword = () => {
        setInputData(prevState => ({
            ...prevState, showPassword: !inputData.showPassword
        }));
    };
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.spinner(true);
        AuthAPI.authClient(inputData.login, inputData.password)
            .then(response => {
                storeUser.setToken(response.data.token)
                localStorage.setItem('token', response.data.token);
                navigate('/', {replace: true});
            })
            .catch(error => {
                const err = error.response.data['error'][0];
                props.showAlert(err, 'error')
            });
        props.spinner(false);
    }

    return (
        <Box sx={{
            backgroundColor: 'rgba(214, 178, 114, 0.3);',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '722px'
        }}>
            <TextField margin="normal" fullWidth label="логин" value={inputData.login} onChange={handleChange}
                       name="login" sx={{backgroundColor: '#FFFFFF', border: '1px solid black', borderRadius: '0px'}}/>
            <TextField margin="normal" fullWidth label="пароль" value={inputData.password} onChange={handleChange}
                       name="password"
                       type={inputData.showPassword ? 'text' : 'password'}
                       InputProps={{
                           endAdornment: <InputAdornment position="end">
                               <IconButton aria-label="toggle password visibility"
                                           onClick={handleClickShowPassword}
                                           onMouseDown={handleMouseDownPassword}>{inputData.showPassword ?
                                   <VisibilityOff/> : <Visibility/>}
                               </IconButton>
                           </InputAdornment>
                       }}
                       sx={{backgroundColor: '#FFFFFF', border: '1px solid black', borderRadius: '0px'}}
            />
            <Button sx={{
                mt: 2,
                width: '40%',
                backgroundColor: '#FFB635',
                color: '#000000',
                borderRadius: '18px',
                fontWeight: 'bold'
            }} fullWidth variant="contained" onClick={handleSubmit}>
                Войти
            </Button>
        </Box>
    );
});

export {LoginBox};