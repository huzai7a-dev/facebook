import React from "react";
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import AddIcon from '@material-ui/icons/Add';
function header(props) {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
          alt="facebook logo"
        />
        <div className="header__search">
          <SearchIcon/>
          <input type="text" placeholder="Search Facebook"/>
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon/>
        </div>

        <div className="header__option">
          <OndemandVideoIcon/>
        </div>
        <div className="header__option">
          <StorefrontIcon/>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon/>
        </div>
        <div className="header__option">
        <VideogameAssetIcon/>
        </div>
      </div>

      <div className="header__right">
        <div className="header__right__icon">
          <Avatar src={props.data.photoURL}/>
          <h4>{props.data.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon/>
        </IconButton>

        <IconButton>
          <ChatIcon/>
        </IconButton>

        <IconButton>
          <NotificationsIcon/>
        </IconButton>

        <IconButton>
          <ArrowDropDownIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default header;
