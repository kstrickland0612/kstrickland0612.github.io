import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";
import { colors } from "../modules/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  body: {
    overflowX: "hidden",
    width: "100%",
    height: "100%",
    margin: 0,
    lineHeight: 1.4,
    padding: 0,
    backgroundColor: colors.OFF_WHITE,
    color: colors.CHARCOAL,
    fontFamily: "Nunito, sans-serif",
  },
});

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 640,
          padding: "0 20px",
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
