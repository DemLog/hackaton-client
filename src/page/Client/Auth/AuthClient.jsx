import {HeaderClient} from "../../../components/AppBar/HeaderClient";
import {Alert, Box, Button, Container, Snackbar} from "@mui/material";
import {FooterClient} from "../../../components/AppBar/FooterClient";
import {LoginBox} from "../../../components/LoginBox";
import {DialogWidget} from "../../../components/DialogWidget";

import {useNavigate} from "react-router-dom";

import React, {useEffect} from "react";
import {ScreenSpinner} from "../../../components/ScreenSpinner";
import {observer} from "mobx-react-lite";
import storeUser from "../../../store/storeUser";

const AuthClient = observer((props) => {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };
    const [spinner, openSpinner] = React.useState(false);

    const [alert, setAlert] = React.useState({
        show: false, msg: null
    });
    const showSnackBar = (msg, type) => {
        setAlert({
            show: true,
            msg: <Alert onClose={closeSnackBar} severity={type} sx={{width: '100%', p: 1, fontSize: 16}}>{msg}</Alert>
        });
    };
    const closeSnackBar = (e, reason) => {
        if (reason === 'clickaway') return;

        setAlert({
            show: false, msg: null
        });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            storeUser.setToken(token);
            navigate('/', {replace: true});
        }
    }, []);

    return (
        <>
            <Box sx={{backgroundColor: 'rgba(255, 182, 53, 0.25);'}}>
                <ScreenSpinner open={spinner}/>
                <Box sx={{
                    display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between',
                }}>
                    <Box>
                        <HeaderClient/>
                        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4}}>
                            <LoginBox openWidget={handleClickOpen} spinner={openSpinner} showAlert={showSnackBar}/>
                        </Container>
                    </Box>
                    <FooterClient/>
                </Box>
                <Button sx={{
                    position: 'fixed',
                    bottom: '70px',
                    backgroundColor: 'rgba(55, 57, 54, 0.5);',
                    width: '300px',
                    height: '60px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    display: 'table-cell'
                }}>чат с поддержкой</Button>
                <DialogWidget
                    open={open}
                    onClose={handleClose}
                />
            </Box>
            <Snackbar open={alert.show} autoHideDuration={3000} onClose={closeSnackBar} anchorOrigin={{
                vertical: 'bottom', horizontal: 'right'
            }}>
                {alert.msg}
            </Snackbar>
        </>
    );
});

export {AuthClient};