import React from "react"
import { CSSObject } from "styled-components"
import { EmailIcon, LinkedInIcon, GithubIcon } from "../images/logos"

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
]

const footerStyle: CSSObject = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: 'center',
  padding: 30
}

const Footer = () => (
  <footer style={footerStyle}>
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {social.map(({ icon, name, link }) => (
          <div style={{ padding: 20 }}>
            <a href={link}>
              <img src={icon} alt={name} style={{ height: 40 }} />
            </a>
          </div>
        ))}
      </div>
      <div>created by K Strickland</div>
    </div>
  </footer>
)

export default Footer
