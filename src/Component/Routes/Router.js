import React from "react";
import SignUp from './SignUp';
import Login from './Login';
import {BrowserRouter,Routes,Route}from "react-router-dom";
const Navigate=()=>{
    return(
        <div className="b">
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    );
}
export default Navigate;