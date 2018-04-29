// @flow
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

/** Header for our beloved site */
const Header = (): React.Node => (
    <nav className="header">
        <NavLink
            className="header__navlink"
            to="/"
            activeClassName="selected"
            exact
        >
            Home
        </NavLink>
        <NavLink
            className="header__navlink"
            to="/news"
            activeClassName="selected"
        >
            Newsfeed
        </NavLink>
    </nav>
);

export default Header;
