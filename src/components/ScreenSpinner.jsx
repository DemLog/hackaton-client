import {
    Backdrop,
    CircularProgress,
    Paper
} from "@mui/material";

export const ScreenSpinner = (props) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={props.open}
        >
            <Paper elevation={3} sx={{p: 2, opacity: 0.9}}>
                <CircularProgress color="inherit" />
            </Paper>
        </Backdrop>
    );
};