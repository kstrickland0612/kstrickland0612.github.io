import { Link } from "gatsby";
import React from "react";
import Cat from "../images/404-cat.png";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StyledButtonLink } from "../components/link";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 40,
      }}
    >
      <div style={{ visibility: 'hidden' }} id="404">
        four oh four
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <h1
          aria-labelledby="404"
          style={{
            fontSize: 100,
            marginBottom: 0,
          }}
        >
          4
          <img src={Cat} height="90px" alt=""/>4
        </h1>
      </div>
      <p>That page doesn&#39;t exist.</p>
      <StyledButtonLink to="/">BACK HOME</StyledButtonLink>
    </div>
  </Layout>
);

export default NotFoundPage;
