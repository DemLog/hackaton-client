import {Route, Routes} from "react-router-dom";
import {Main} from "./page/Client/Main";
import {NotFoundPage} from "./page/NotFoundPage";
import {Dispatcher} from "./page/Dispatcher/Dispatcher";
import {AuthClient} from "./page/Client/Auth/AuthClient";
import {AuthDispatcher} from "./page/Dispatcher/AuthDispatcher";
import {ThemeProvider} from "@mui/material";
import {theme} from './theme';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="login" element={<AuthClient/>}/>
            <Route path="control" element={<Dispatcher/>}/>
            <Route path="control/login" element={<AuthDispatcher/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
