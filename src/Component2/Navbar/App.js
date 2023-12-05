import React from 'react';
import Button from './ Button';
import Navbar from './Navbar';
const App = () => {
return (
<div> <Navbar/> // rending navbar.js above button component
<div style={{ textAlign: 'center', marginTop: '20px' }}>
< Button />
</div>
</div>
);
};
export default App;