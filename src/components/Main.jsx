import {AppBar, Box} from "@mui/material";
import React from "react";
import {Outlet} from 'react-router-dom';
import logo from "./AppBar/img/logo.svg";

function Main(props) {
    return (
        <>
            <AppBar position="static" sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                boxShadow: 'none',
                backgroundColor: '#ffb635'
            }}>
                <Box sx={{height: '6vh'}}>
                    <img src={logo} style={{height: '95%'}}/>
                </Box>
            </AppBar>
            <Outlet/>
        </>
    );
}

export {Main};