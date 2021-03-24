import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import cookie from 'react-cookies'
import {
  ProfileImage,
  Path,
  LogOut,
  ProfileMenuWrapper,
} from "./ProfileMenuElements";
import { 
    AccountCircle
} from '@material-ui/icons';
import { 
    Menu,
    MenuItem,
    IconButton
} from '@material-ui/core';

const ProfileMenu = ({ userContext }) => {
  const { token, setToken } = useContext(userContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const name = token?.user?.user_first_name + " " + token.user?.user_last_name;
  console.log(token);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const removeToken = () => {
    setToken(null)
  };

  const handelSubmitClick = (e) => {
    e.preventDefault();
    removeToken();
    handleClose();
  };
  const logout = (e) => {
    handelSubmitClick(e);
    history.push("/");
  };
  return (
    <ProfileMenuWrapper>
      {token?.user?.user_img_url ? (
        <ProfileImage src={token?.user?.user_img_url} onClick={handleMenu} />
      ) : (
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle
            style={{ color: "#27DEBF", width: "2em", height: "2em" }}
          />
        </IconButton>
      )}
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <Path>
          <MenuItem onClick={handleClose}>{name}</MenuItem>
        </Path>
        <Path to="/freelance/mon-profile-freelance">
          <MenuItem onClick={handleClose}>Mon profile</MenuItem>
        </Path>
        <LogOut onClick={logout}>Déconnecter</LogOut>
      </Menu>
    </ProfileMenuWrapper>
  );
};

export default ProfileMenu