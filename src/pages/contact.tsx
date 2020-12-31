import React from "react";
import { EmailIcon, LinkedInIcon, GithubIcon } from "../images/tech-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";

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

export const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <div>
      Reach out if you'd like to talk. Tell me about a project you're excited
      about. Ask me what I'm reading. Send game recommendations.
    </div>
    <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
      {social.map(({ icon, name, link }) => (
        <div style={{ padding: 20 }}>
          <a href={link} target="_blank">
            <img src={icon} alt={name} style={{ height: 40 }} />
          </a>
        </div>
      ))}
    </div>
  </Layout>
);

export default Contact;
