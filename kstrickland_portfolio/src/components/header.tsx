import React from "react"
import { colors } from "../modules/colors"
import { StyledButton } from './button'

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}

const Navigation = () => (
  <nav
    style={{
      display: "flex",
      paddingRight: 20,
    }}
  >
    <StyledButton>RESUME</StyledButton>
  </nav>
)

const Header = () => (
  <header style={headerStyle}>
    <a
      href="/"
      style={{
        fontFamily: "Ubuntu, sans-serif",
        fontSize: 66,
        paddingLeft: 10,
        textDecoration: "none",
        color: colors.CHARCOAL
      }}
    >
      k
    </a>
    <Navigation />
  </header>
)

export default Header
