import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';
const UserProfile = ({ user }) => {
const { firstName, lastName, email, profilePicture } = user;
const handleButtonClick = () => {
alert(`${firstName} ${lastName}`);
};
return (
<Card sx={{ maxWidth: 345, m: 2 }}>
<CardContent style={{ textAlign: 'center' }}>
<Avatar
src={profilePicture}
alt={`${firstName} ${lastName}`}
sx={{ width: 80, height: 80, mb: 2 }}
/>
<Typography variant="h5">
{firstName} {lastName}
</Typography>
<Typography color="text.secondary">
{email}
</Typography>
<Button variant="contained" color="primary" onClick={handleButtonClick} sx={{ mt: 2 }}>
Show Name
</Button>
</CardContent>
</Card>
);
};
UserProfile.propTypes = {
user: PropTypes.shape({
firstName: PropTypes.string.isRequired,
lastName: PropTypes.string.isRequired,
email: PropTypes.string.isRequired,
profilePicture: PropTypes.string.isRequired
}).isRequired
};
export default UserProfile;