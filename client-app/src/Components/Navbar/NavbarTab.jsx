import React from "react";
import "./NavbarTab.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "@mui/material";

function NavbarTab() {
  return (
    <>
      <div className="navbarTab">
        <div className="containerTab">
          <div className="allTab">
            <div className="logo">
              <NavLink to={"/"}>
                <img
                  src="https://shopping-app-xx1p.vercel.app/static/media/Sooraj-logo.4ea9ba32a0c93354b8a8.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="AllMatches">
              <NavLink className={"matchestab3"}>Live Matches</NavLink>
            </div>
            <div className="AllMatches">
              <NavLink className={"matchestab3"}>All Matches</NavLink>
            </div>
            <div className="AllMatches">
              <NavLink className={"matchestab3"}>Login</NavLink>
            </div>
            <div className="avatar">
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarTab;
