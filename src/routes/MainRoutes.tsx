import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Estudos from "../pages/Estudos";
import Agenda from "../pages/Agenda";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/estudos" element={<Estudos/>}/>
            <Route path="/agenda" element={<Agenda/>}/>
        </Routes>
    )
}

export default MainRoutes;