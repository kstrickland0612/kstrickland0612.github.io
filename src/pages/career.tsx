import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { CareerSection } from "../components/career-section";

const Career = () => (
  <Layout>
    <SEO title="Career" />
    <h1>Career</h1>
    <div>
      This is a story about how I became a software engineer and what I learned
      along the way.
    </div>
    <CareerSection />
  </Layout>
);

export default Career;
