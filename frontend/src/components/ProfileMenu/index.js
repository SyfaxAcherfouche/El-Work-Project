import React, { useContext } from "react";
import cookie from 'react-cookies'
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  console.log(token, "mdrrrr");
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const removeToken = () => {
    setToken(null)
    cookie.remove('token')
    cookie.remove('user')
  };

  const logout = (e) => {
    e.preventDefault();
    removeToken();
    handleClose();
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
        <Path to='/compte'>
          <MenuItem onClick={handleClose}>{token?.token?.user?.user_first_name + " " + token?.token.user?.user_last_name}</MenuItem>
        </Path>
        <Path to={`/${token?.token?.user?.user_first_name + token?.token.user?.user_last_name}`}>
          <MenuItem onClick={handleClose}>Mon Espace Freelance</MenuItem>
        </Path>
        <LogOut onClick={logout}>Déconnecter</LogOut>
      </Menu>
    </ProfileMenuWrapper>
  );
};

export default ProfileMenu