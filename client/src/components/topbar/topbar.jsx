import React from "react";
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';


export default function topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Serach for Friends, Posts or Videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <PersonIcon />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <MessageRoundedIcon />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <NotificationsRoundedIcon />
                <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <img alt="" src="/assets/person/1.jpeg" className="topbarImg"/>
      </div>
    </div>
  );
}
