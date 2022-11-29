import React from "react";

import menuIcon from "../../../static/img/menu-icon.png";
import doqu from "../../../static/img/doqu.png";
import doquText from "../../../static/img/doqu-text.png";

const navItems = [{ name: "Contact" }, { name: "Docs" }, { name: "Blog" }];

const navMenuStyle = {
  height: "63px",
  display: "flex",
  justifyContent: "space-between",
  width: "100vw",
  alignItems: "center",
  position: "fixed",
  padding: "0px 40px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
  zIndex: "9999",
};

const NavBar = () => {
  return (
    <div style={navMenuStyle} className="nav-bar">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={doqu}
          className="doqu-logo-nav"
          style={{ width: "60px", height: "42px" }}
        />
        <img
          src={doquText}
          className="doqu-text-nav"
          style={{ height: "24px" }}
        />
      </div>

      <ul className="nav-menu-full">
        {navItems.map((item, index) => {
          return (
            <li
              key={`nav-item-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                color: "#032B44",
                padding: "0px 20px",
              }}
            >
              <div style={{ cursor: "pointer" }}>{item.name}</div>
            </li>
          );
        })}
        <li
          style={{
            background: "#032B44",
            color: "white",
            width: "80px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            marginLeft: "20px",
          }}
        >
          <div>Demo</div>
        </li>
      </ul>

      <div className="nav-menu-small">
        <img src={menuIcon} style={{ height: "18px", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default NavBar;
