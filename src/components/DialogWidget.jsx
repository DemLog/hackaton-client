import {AppBar, Box, Button, Container, createTheme, Dialog, TextField, ThemeProvider} from "@mui/material";

function DialogWidget(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Box sx={{backgroundColor: 'rgba(214, 178, 114, 0.3);', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px'}}>
                <TextField margin="normal" fullWidth label="Придумайте шестизначный код" name="password" sx={{backgroundColor: '#FFFFFF', border: '1px solid black', borderRadius: '0px'}}/>
                <Button sx={{mt: 2, width: '60%', backgroundColor: '#FFB635', color: '#000000', borderRadius: '18px', fontWeight: 'bold'}} fullWidth variant="contained" onClick={handleClose}>
                    Подтвердить
                </Button>
            </Box>
        </Dialog>
    );
}

export {DialogWidget};