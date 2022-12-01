import React, { useState, useRef, useEffect } from "react";

import menuIcon from "../../../static/img/menu-icon.png";
import doqu from "../../../static/img/doqu.png";
import doquText from "../../../static/img/doqu-text.png";

import docs from "../../../static/img/documentation.png";
import blogs from "../../../static/img/blogs.png";
import contact from "../../../static/img/contact.png";

const navItems = [
  { name: "Contact", link: "/contact" },
  { name: "Docs", link: "/docs/intro" },
  { name: "Blog", link: "/blog" },
];

const navItemsSmall = [
  { name: "Documentation", link: "/docs/intro", icon: docs },
  { name: "Blogs", link: "/blog", icon: blogs },
  { name: "Contact", link: "/contact", icon: contact },
];

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
  const [openNav, setOpenNav] = useState(false);

  const smallNavRef = useRef(null);

  const detectClickAway = (event) => {
    if (
      smallNavRef &&
      smallNavRef.current &&
      !smallNavRef.current.contains(event.target)
    ) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", detectClickAway);

    return () => {
      document.removeEventListener("click", detectClickAway);
    };
  }, []);

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
          style={{ width: "60px", height: "42px", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        />
        <img
          src={doquText}
          className="doqu-text-nav"
          style={{ height: "24px", cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
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
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.location.href = item.link;
                }}
              >
                {item.name}
              </div>
            </li>
          );
        })}
        {/* <li
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
        </li> */}
      </ul>

      <div className="nav-menu-small" ref={smallNavRef}>
        <img
          src={menuIcon}
          style={{ height: "18px", cursor: "pointer" }}
          onClick={() => {
            setOpenNav(!openNav);
          }}
        />
        {openNav && (
          <div
            style={{
              backgroundColor: "#032B44",
              position: "absolute",
              top: "100%",
              right: 0,
              width: "min(240px, 100vw)",
              height: "calc(100vh - 63px)",
              paddingTop: "20px",
              color: "rgb(200, 200, 200)",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                fontSize: "18px",
                padding: "5px 25px",
                margin: 0,
              }}
              className="nav-menu-small-list"
            >
              {navItemsSmall.map((item, index) => (
                <li
                  key={`navitem-${index}`}
                  style={{
                    cursor: "pointer",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <img
                    src={item.icon}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "20px",
                    }}
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
