import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Estudos from "../pages/Estudos";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/estudos" element={<Estudos/>}/>
        </Routes>
    )
}

export default MainRoutes;