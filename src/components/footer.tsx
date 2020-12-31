import React from "react";
import { CSSObject } from "styled-components";
import { EmailIcon, LinkedInIcon, GithubIcon } from "../images/tech-icons";
import { StyledButtonLink } from "./link";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";

const social = [
  { icon: EmailIcon, name: "email", link: "mailto:kstrickland0612@gmail.com" },
  {
    icon: GithubIcon,
    name: "github",
    link: "https://github.com/kstrickland0612",
  },
  {
    icon: LinkedInIcon,
    name: "linkedin",
    link: "https://www.linkedin.com/in/k-strickland/",
  },
];

const footerStyle: CSSObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "50px 0 30px",
};

interface PageNode {
  path: string;
}

interface Query {
  allPages: {
    nodes: PageNode[];
  };
}

const Footer = () => {
  const { pathname } = useLocation();
  const {
    allPages: { nodes: pages },
  }: Query = useStaticQuery(graphql`
    query {
      allPages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  const omitContactButton = ["404", "contact"];

  const directoryCheck = pages.some(
    ({ path }) =>
      path === pathname && !omitContactButton.includes(path.replace(/\//g, ""))
  );

  return (
    <footer style={footerStyle}>
      <div>
        {directoryCheck ? (
          <StyledButtonLink to="/contact/">CONTACT ME</StyledButtonLink>
        ) : null}
        <div style={{ paddingTop: 25 }}>
          This site was created by K Strickland 🌈🧑🏻‍💻
        </div>
      </div>
    </footer>
  );
};

export default Footer;
