import React, { PropsWithChildren } from "react";
import { Link } from "gatsby";
import { colors } from "../modules/colors";
import { CSSObject } from "styled-components";
import "../components/component-styles.css";

const linkStyle: CSSObject = {
  transition: "0.5s",
};

export const StyledLink = ({
  to,
  style,
  children,
}: PropsWithChildren<{ to: string; style?: CSSObject }>) => (
  <Link to={to} style={{ ...style, ...linkStyle }} className="link">
    {children}
  </Link>
);

export const buttonStyle: CSSObject = {
  boxSizing: "border-box",
  borderColor: colors.CHARCOAL,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 25,
  fontSize: 12,
  letterSpacing: 2,
  padding: 10,
  textDecoration: "none",
  transition: "0.7s",
};

export const StyledButtonLink = ({
  to,
  style,
  children,
}: PropsWithChildren<{ to: string; style?: CSSObject }>) => (
  <Link to={to} style={{ ...style, ...buttonStyle }} className="button">
    {children}
  </Link>
);
