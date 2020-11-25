import { Link } from "gatsby"
import React from "react"
import { buttonStyle } from "../components/button"
import "../components/component-styles.css"
import Cat from "../images/404-cat.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 40
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 140,
            marginBottom: 0,
          }}
        >
          4
          <img src={Cat} height="120px" />4
        </h1>
      </div>
      <p>That page doesn&#39;t exist.</p>
      <Link to="/" style={{ ...buttonStyle, textDecoration: "none" }} className="button-link">
        BACK HOME
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
