import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/login/login";



export const AppRouter: React.FC<{}> = () =>{
return(<>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
    </Routes>
</>)
}