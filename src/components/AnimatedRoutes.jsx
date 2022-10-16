import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {Main} from "./Main";
import {AuthClient} from "../page/Client/Auth/AuthClient";
import {Dispatcher} from "../page/Dispatcher/Dispatcher";
import {AuthDispatcher} from "../page/Dispatcher/AuthDispatcher";
import {NotFoundPage} from "../page/NotFoundPage";

import {AnimatePresence} from 'framer-motion';
import Orders from "../page/Client/Orders";
import {CreateOrder} from "../page/Client/CreateOrder";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main/>}>
                    <Route index element={<CreateOrder/>}/>
                    <Route path="orders" element={<Orders/>}/>
                </Route>
                <Route path="login" element={<AuthClient/>}/>
                <Route path="control" element={<Dispatcher/>}/>
                <Route path="control/login" element={<AuthDispatcher/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;