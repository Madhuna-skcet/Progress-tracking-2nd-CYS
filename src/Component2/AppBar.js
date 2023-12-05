import React from 'react';
import { AppBar,Typography, Grid, Card, Button } from '@mui/material';
function ContactList() {
const c= [
{ n: 'John Doe', e: 'johndoe@example.com' },
{ n: 'Jane Doe', e: 'janedoe@example.com' },
// Add more contacts here
]
return (
<div>
<AppBar position="static">
<Typography variant="h6">
Contact List
</Typography>
</AppBar>
<Grid container>
{c.map((contact, index) => (
<Grid item xs={12} sm={6} md={4}>
<Card>
<Typography variant="h5">{contact.n}</Typography>
<Typography variant="body1">{contact.e}</Typography>
<Button variant="contained" style={{ marginTop: 10 }}>
Contact
</Button>
</Card>
</Grid>
))}
</Grid>
</div>
);
}
export default ContactList;