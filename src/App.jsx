import {Route, Routes} from "react-router-dom";
import {Main} from "./page/Client/Main";
import {NotFoundPage} from "./page/NotFoundPage";
import {Dispatcher} from "./page/Dispatcher/Dispatcher";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="control" element={<Dispatcher />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
