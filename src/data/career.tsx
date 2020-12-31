import React from "react";
import OwnUpLogo from "../images/ownup.svg";
import GeneralAssemblyLogo from "../images/general-assembly.svg";
import ETILogo from "../images/ETI.svg";
import AddgeneLogo from "../images/addgene.svg";
import MiamiLogo from "../images/miami-university.svg";

export const engineering = [
  {
    org: "Own Up",
    logo: OwnUpLogo,
    mission:
      "Helping every American get a fair deal on their mortgage. Own Up uses technology and transparency to simplify the home financing process. Evaluate lenders, compare rates, and get the best terms.",
    title: "Software Engineer",
    timeline: "July 2019 - present",
    tech:
      "JavaScript, TypeScript, Node, React, Redux, AWS (CloudFormation, CodeBuild, Lambdas, DynamoDB, S3, X-Ray, CloudWatch, Step Functions, ...) Jest, Storybook, Github/Git",
    description: (
      <>
        <ul>
          <li>Agile Scrum environment</li>
          <li>Domain driven design</li>
          <li>Peer-reviewed pull requests</li>
          <li>
            Continuous integration / continuous deployment with AWS + Netlify
          </li>
        </ul>
        <p>
          Build front and back end features. Tackle tech debt and bug requests
          with an emphasis on leaving code cleaner than it was found. Implement
          new tooling and best practices to improve team productivity. Deliver
          future-proof code with thoughtful test coverage. Create performant and
          accessible user experiences.
        </p>
      </>
    ),
  },
  {
    org: "General Assembly",
    logo: GeneralAssemblyLogo,
    title: "Software Engineering Fellowship",
    timeline: "March 2019 - June 2019",
    tech:
      "JavaScript, Node, React, AWS S3, PostgreSQL, Ruby on Rails, Express, MongoDB, Heroku",
    description: (
      <>
        <p>
          Completed a 12-week, 500+ hour immersive course on full-stack software
          engineering. Designed and built 4 full-stack applications using modern
          technologies and best practices.{" "}
          <b>Decided I do really love engineering.</b>
        </p>
      </>
    ),
  },
];

export const other = [
  {
    org: "Empowerment Through Integration",
    logo: ETILogo,
    mission:
      "Disrupting the narrative surrounding disability through empowering youth with disabilities and accelerating authentic inclusion.",
    title: "Program Director and Interim COO",
    timeline: "March 2018 - March 2019",
    tech: "",
    description: (
      <>
        <p>
          Spent a year working on disability empowerment and inclusion. Wore all
          hats. Learned to recognize and avoid performative diversity and inclusion
          practices. Learned from amazing people who have been doing this work
          for decades.
          <b>
            {" "}
            Developed a huge appreciation for accessibility as innovation.{" "}
          </b>
        </p>
      </>
    ),
  },
  {
    org: "Addgene",
    logo: AddgeneLogo,
    mission:
      "Accelerating research and discovery by improving access to useful research materials and information.",
    title: "Customer Support & Operations Manager",
    timeline: "October 2014 - June 2018",
    tech: "",
    description: (
      <>
        <p>
          Spent a few years understanding customer needs and gathering product
          resources to meet those needs. Managed an awesome team of Support and
          Shipping Specialists. Learned a lot about getting viruses and dry ice
          across international borders. Solved new problems every day. Played
          around with Jupyter Notebooks to back up product ideas with data. Hung
          out with the developers.
          <b> Became very curious about engineering as a career option. </b>
        </p>
      </>
    ),
  },
];

export const education = [
  {
    org: "Miami University",
    logo: MiamiLogo,
    mission:
      "No, not the one in Florida. This school is in Southwest Ohio (where I grew up), and sits on the tribal lands of the Myaamia / Miami people who were forcibly displaced to Kansas and Oklahoma in the 1840s.",
    title:
      "B.A. International Studies; B.A. Latin American, Latinx & Caribbean Studies",
    timeline: "",
    tech: "",
    description: (
      <>
        <p>
          Highlight: Traveling around Cuba on a student visa, which at the time
          was one of the only ways to get into the country.
        </p>
      </>
    ),
  },
];
