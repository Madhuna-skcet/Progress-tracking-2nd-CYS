import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
function Navbar() {
return (
<AppBar position="static">
<Toolbar>
<Typography variant="h6" style={{ flexGrow: 1 }}>
Logo
</Typography>
<Button color="inherit">Link 1</Button>
<Button color="inherit">Link 2</Button>
<Button color="inherit">Link 3</Button>
</Toolbar>
</AppBar>
);
}
export default Navbar;