import React from "react";
import { Typography, Avatar, Button, Box } from "@mui/material";

const UserProfile = ({ onCloseUserMenu }) => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/static/images/avatar.jpg", // URL to user's avatar image
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Box>
        <Avatar alt="User Avatar" src={user.avatar} />
      </Box>
      <Box>
        <Typography variant="subtitle1">{user.name}</Typography>
        <Typography variant="body2">{user.email}</Typography>
      </Box>
      <Button onClick={onCloseUserMenu} color="inherit">
        Close
      </Button>
    </Box>
  );
};

export default UserProfile;
