import {AppBar, Box, Container, createTheme, ThemeProvider} from "@mui/material";

function Layout(props) {
    const theme = createTheme({
        palette: {
            type: 'light',
            background: {
                default: 'rgba(255,182,53,0.1)',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor: 'background.default'}}>
                {props.children}
            </Box>
        </ThemeProvider>
    );
}

export {Layout};