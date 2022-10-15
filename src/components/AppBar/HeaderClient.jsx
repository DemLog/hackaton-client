import {AppBar, Box, Container, createTheme, ThemeProvider, Toolbar} from "@mui/material";
import logo from "./img/logo.svg";

function HeaderClient(props) {
    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#ffb635',
            },
            secondary: {
                main: '#f50057',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', boxShadow: 'none'}}>
                <Box sx={{height: '100px'}}>
                    <img src={logo} style={{height: '95%'}}/>
                </Box>
            </AppBar>
        </ThemeProvider>
    );
}

export {HeaderClient};