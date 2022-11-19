import React from "react";

import doqu from "../../../static/img/doqu.png";

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
  backgroundColor: "white",
  zIndex: "9999",
};

const navItemListStyle = {
  display: "flex",
  listStyle: "none",
  justifyContent: "space-evenly",
  padding: 0,
  margin: 0,
  width: "50%",
  fontWeight: 700,
};

const NavBar = () => {
  return (
    <div style={navMenuStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={doqu} style={{ width: "60px", height: "42px" }} />
      </div>
      <ul style={navItemListStyle}>
        {navItems.map((item, index) => {
          return (
            <li
              key={`nav-item-${index}`}
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>{item.name}</div>
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
          }}
        >
          <div>Demo</div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
