import React, { useState } from "react";
import { Link } from "gatsby";
import {
  AWSIcon,
  GatsbyIcon,
  JestIcon,
  LighthouseIcon,
  NetlifyIcon,
  NodeIcon,
  ReactIcon,
  ReduxIcon,
  SnowflakeIcon,
  TypeScriptIcon,
} from "../images/tech-icons";
import { colors } from "../modules/colors";
import { StyledLink } from "./link";

const stack = [
  { icon: TypeScriptIcon, name: "TypeScript" },
  { icon: NodeIcon, name: "NodeJS" },
  { icon: ReactIcon, name: "React" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: AWSIcon, name: "AWS" },
  { icon: GatsbyIcon, name: "Gatsby" },
  { icon: NetlifyIcon, name: "Netlify" },
  { icon: JestIcon, name: "Jest" },
  { icon: LighthouseIcon, name: "Lighthouse" },
  { icon: SnowflakeIcon, name: "Snowflake" },
];

const Tech = ({ icon, name }: { icon: string; name: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={icon}
        alt={`${name} logo`}
        style={{
          height: 40,
        }}
      />
      <div
        style={{
          paddingTop: 5,
          fontSize: 10,
          color: `${isHover ? colors.ACCENT_ORANGE : colors.OFF_WHITE}`,
          maxWidth: 50,
          overflowWrap: "break-word",
          textAlign: "center",
          transition: "0.5s",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export const TechStack = () => (
  <>
    <p>
      I enjoy learning about new ways to solve problems. At the moment I'm
      enjoying working with these technologies:
    </p>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        maxWidth: 450,
        margin: "auto",
        padding: 20,
      }}
    >
      {stack.map(({ icon, name }) => (
        <Tech icon={icon} name={name} />
      ))}
    </div>
    <div>
      Check out my <StyledLink to="/career/">career page</StyledLink> to see
      what I've worked on.
    </div>
  </>
);
