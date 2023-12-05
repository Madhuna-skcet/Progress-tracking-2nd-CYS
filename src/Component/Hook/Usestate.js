import React,{useState}from 'react';
const Hook=()=>{
const[count,setCount]=useState(0);
return(
    <div>
    <h1>UseState</h1>
<p>Count:{count}</p>
<button onClick={()=>setCount(count+1)}>Increment</button>
<button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
);
};
export default Hook;