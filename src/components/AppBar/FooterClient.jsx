import {AppBar, Container, createTheme, ThemeProvider} from "@mui/material";

function FooterClient(props) {
    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#D6B272',
            },
            secondary: {
                main: '#D6B272',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{height: '100px'}}>
                <Container>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export {FooterClient};