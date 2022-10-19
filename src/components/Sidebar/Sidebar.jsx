import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp1.licdn.com/dms/image/D4D03AQGSJOFfTI9uOQ/profile-displayphoto-shrink_100_100/0/1666013036629?e=1671667200&v=beta&t=kURXsMGwR4MCILZG43h8O4GO4-qjziwcIR_YBYsZr60"
        />
        <h2>Alicja Bobko</h2>
        <h4>bobkoalicja@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
