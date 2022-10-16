import {Route, Router, Routes, useLocation} from "react-router-dom";
import {Main} from "./components/Main";
import {NotFoundPage} from "./page/NotFoundPage";
import {Dispatcher} from "./page/Dispatcher/Dispatcher";
import {AuthClient} from "./page/Client/Auth/AuthClient";
import {AuthDispatcher} from "./page/Dispatcher/AuthDispatcher";
import {ThemeProvider} from "@mui/material";
import {theme} from './theme';
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {

    return (
        <AnimatedRoutes/>
    );
}

export default App;
