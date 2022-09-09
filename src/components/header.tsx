import { Link } from "gatsby";
import React from "react";
import { colors } from "../modules/colors";
import { StyledLink } from "./link";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
};

const Navigation = () => (
  <nav
    style={{
      display: "flex",
      paddingRight: 20,
    }}
  >
    <StyledLink to="/career/" style={{ padding: 10 }}>
      Career
    </StyledLink>
    <StyledLink to="/contact/" style={{ padding: 10 }}>
      Contact
    </StyledLink>
  </nav>
);

const Header = () => (
  <header style={headerStyle}>
    <a className="skip-link" href="#main">Skip to content</a>
    <Link
      aria-label="home"
      to="/"
      style={{
        fontFamily: "Ubuntu, sans-serif",
        fontSize: 66,
        paddingLeft: 10,
        textDecoration: "none",
        color: colors.CHARCOAL,
      }}
    >
      kai
    </Link>
    <Navigation />
  </header>
);

export default Header;
