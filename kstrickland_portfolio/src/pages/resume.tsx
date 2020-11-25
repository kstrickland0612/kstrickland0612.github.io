import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Experience</h1>
    <h2>Software Engineering</h2>
    <h3>Own Up</h3>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Software Engineer</h4>
      <p>July 2019 - present</p>
    </div>
    <p>
      Own Up uses technology and transparency to simplify the home financing
      process. Our simple to use online tools help home buyers evaluate lenders,
      compare rates, and get the best terms.
    </p>
    <ul>
      <li>Agile Scrum environment</li>
      <li>Domain driven design</li>
      <li>Peer-reviewed pull requests</li>
      <li>Continuous integration / continuous deployment with AWS + Netlify</li>
    </ul>
    <p>
      <i>
        Key technologies: JavaScript, TypeScript, React, Redux, AWS
        (CloudFormation, CodeBuild, Lambdas, DynamoDB, S3), Jest, Storybook,
        Github/Git
      </i>
    </p>
    <p>
      Build front and back end features, chores, and bug requests with an
      emphasis on leaving code cleaner than it was found.
    </p>
    <p>
      Implement new tooling and best practices to improve team productivity.
    </p>
    <p>Deliver working code with thoughtful test coverage.</p>
    <p>Create performant and accessible user experiences.</p>

    <h3>General Assembly</h3>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Software Engineering Fellowship</h4>
      <p>March 2019-June 2019</p>
    </div>
    <p>
      Completed a 12-week, 500+ hour immersive course on full-stack software
      engineering.
    </p>
    <p>
      Designed and built 4 full stack applications using modern technologies and
      best practices.
    </p>
    <p>
      <i>
        Key Technologies: JavaScript, Node, React, AWS S3, PostgreSQL, Ruby on
        Rails, Express, MongoDB, Heroku
      </i>
    </p>
    <h2>Other Formative Moments</h2>
    <h3>Empowerment Through Integration</h3>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Program Director and Interim COO</h4>
      <p>March 2018 - March 2019</p>
    </div>
    <p>
      Mission: disrupt the narrative surrounding disability through both
      empowering youth with disabilities individually - and accelerating
      authentic inclusion globally.
    </p>
    <p>
      Spent a year working on disability empowerment and inclusion. Honed my BS
      detector for performative diversity and inclusion practices. Learned from
      amazing people who have been doing this work for decades.
      <b> Developed a huge appreciation for accessibility as innovation. </b>
      See more on my LinkedIn.
    </p>
    <h3>Addgene</h3>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>Customer Support & Operations Manager</h4>
      <p>October 2014 - June 2018</p>
    </div>
    <p>
      Mission: accelerate research and discovery by improving access to useful
      research materials and information.
    </p>
    <p>
      Spent several years understanding customer needs and gathering product
      resources to meet those needs. Learned a lot about getting viruses and dry
      ice across international borders. Solved new problems every day. Managed
      an awesome team. Played around with Python notebooks to back up product
      ideas with data.
      <b> Became very curious about engineering as a career option. </b>
      See more on my LinkedIn.
    </p>
  </Layout>
)

export default Resume
