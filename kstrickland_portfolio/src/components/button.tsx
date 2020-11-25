import React, { PropsWithChildren } from "react"
import { colors } from "../modules/colors"
import { CSSObject } from "styled-components"
import "./component-styles.css"

export const buttonStyle: CSSObject = {
  boxSizing: "border-box",
  borderColor: colors.CHARCOAL,
  borderWidth: 2,
  borderStyle: "solid",
  borderRadius: 25,
  cursor: "pointer",
  fontSize: 12,
  letterSpacing: 2,
  padding: 10,
  transition: "0.7s",
  ":hover": {
    backgroundColor: colors.CHARCOAL,
    color: colors.OFF_WHITE,
  },
}

export const StyledButton = ({ children }: PropsWithChildren<{}>) => (
  <button style={buttonStyle}>{children}</button>
)
