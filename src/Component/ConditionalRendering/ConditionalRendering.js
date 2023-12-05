import React,{useState} from 'react';
import SignUp from './SignUp';
import Login from './Login';
const Condi1 = () => {
    const[state,setState]=useState({is:true});
    return(state.is?<h1><Login/></h1>:<h1><SignUp/></h1>)

};

export default Condi1;