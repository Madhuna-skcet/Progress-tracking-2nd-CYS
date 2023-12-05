import React,{useState,useEffect}from 'react';
import { ReactDOM } from 'react-dom/client';
function Timer(){
const[count,setCount]=useState(0);
useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=>count+1);
        alert('useeffect')
    },1000);
},);
const update=()=>{
    setCount(count+1)
}
return(
    <div>
    <h1>UseEffect</h1>
    <h1>I've rendered{count}times!</h1>
  <button onClick={update}>onClick</button>
  <p>Count:{count}</p>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
);
};
export default Timer;