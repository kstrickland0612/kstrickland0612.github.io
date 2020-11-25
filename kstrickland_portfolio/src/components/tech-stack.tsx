import React from "react"
// import { JavaScript } from "../images/logos"
import {
  AWSIcon,
  Auth0Icon,
  CodecovIcon,
  CSSIcon,
  GatsbyIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaScriptIcon,
  JestIcon,
  JiraIcon,
  JQueryIcon,
  LighthouseIcon,
  NetlifyIcon,
  NodeIcon,
  PivotalIcon,
  ReactIcon,
  ReduxIcon,
  RubyIcon,
  RailsIcon,
  SentryIcon,
  StorybookIcon,
  StyledComponentsIcon,
  TrelloIcon,
} from "../images/logos"
import { colors } from "../modules/colors"

const stack = [
  { icon: JavaScriptIcon, name: "Javascript" },
  { icon: NodeIcon, name: "NodeJS" },
  { icon: ReactIcon, name: "React" },
  { icon: ReduxIcon, name: "Redux" },
  { icon: AWSIcon, name: "Amazon Web Services" },
  { icon: GatsbyIcon, name: "Gatsby" },
  { icon: NetlifyIcon, name: "Netlify" },
  { icon: JestIcon, name: "Jest" },
  { icon: CodecovIcon, name: "Codecov" },
  { icon: HTMLIcon, name: "HTML" },
  { icon: CSSIcon, name: "CSS" },
  { icon: StyledComponentsIcon, name: "Styled Components" },
  { icon: Auth0Icon, name: "Auth0" },
  { icon: LighthouseIcon, name: "Lighthouse" },
  { icon: JQueryIcon, name: "jQuery" },
  { icon: RubyIcon, name: "Ruby" },
  { icon: RailsIcon, name: "Ruby on Rails" },
  { icon: SentryIcon, name: "Sentry" },
  { icon: StorybookIcon, name: "Storybook" },
  { icon: GitIcon, name: "Git" },
  { icon: GithubIcon, name: "Github" },
  { icon: PivotalIcon, name: "Pivotal Tracker" },
  { icon: JiraIcon, name: "Jira" },
  { icon: TrelloIcon, name: "Trello" },
]

export const TechStack = () => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {stack.map(({ icon, name }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
        }}
      >
        <img
          src={icon}
          alt={`${name} logo`}
          style={{
            height: 40,
          }}
        />
      </div>
    ))}
  </div>
)
