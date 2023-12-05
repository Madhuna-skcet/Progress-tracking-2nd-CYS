import React from 'react'
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import Home from './Component/Home';
const func1=()=>{
    if(window.location.pathname==="/Home.js"){
        return <Home />
        
    }
}
const func2=()=>{
    if(window.location.pathname==="/Login.js"){
        return <Login />

    }
}
const func3=()=>{
    if(window.location.pathname==="/"){
        return <SignUp />

    }
}
const App=()=>{
    return(
        <div>
        {func1()}
        {func2()}
        {func3()}
        </div>
    )
}
export default App