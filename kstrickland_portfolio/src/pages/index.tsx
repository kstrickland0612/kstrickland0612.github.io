import React from "react"
import { TechStack } from "../components/tech-stack"
import { About } from "../components/about"
import { WorkingWithMe } from "../components/working-with-me"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Hi" />
    <About />
    <p>I'm always up for learning new things. At the moment I'm enjoying working with these tools:</p>
    <TechStack />
    <WorkingWithMe />
  </Layout>
)

export default IndexPage
