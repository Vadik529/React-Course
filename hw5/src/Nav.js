import { Link, NavLink, Outlet } from "react-router-dom";

import React from "react";

const navLinks = ["Home", "Popular", "Battle"];

const Nav = () => {
  return (
    <>
      <ul className="nav">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavLink
              to={navLink === "Home" ? "/" : navLink.toLocaleLowerCase()}
            >
              {navLink}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Nav;
