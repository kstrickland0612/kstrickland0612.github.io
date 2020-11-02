import React, { PropsWithChildren } from "react"

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
