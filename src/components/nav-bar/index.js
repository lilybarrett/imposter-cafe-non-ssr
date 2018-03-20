import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavList, NavLink } from "./styles";

const NavBar = () => {
    return (
        <Nav>
            <NavList>
                <NavLink>
                    <Link to="/home">Home</Link>
                </NavLink>
                <NavLink>
                    <Link to="/menu">Menu</Link>
                </NavLink>
            </NavList>
        </Nav>
    );
}

export default NavBar;