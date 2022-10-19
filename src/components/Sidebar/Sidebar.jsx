import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src="https://media-exp1.licdn.com/dms/image/D4D03AQGSJOFfTI9uOQ/profile-displayphoto-shrink_100_100/0/1666013036629?e=1671667200&v=beta&t=kURXsMGwR4MCILZG43h8O4GO4-qjziwcIR_YBYsZr60"
        />
        <h2 className="sidebar__name">Alicja Bobko</h2>
        <h4 className="sidebar__email">bobkoalicja@gmail.com</h4>
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
      <div className="sidebar__bottom">
        <p className="sidebar__bottom__title">Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
