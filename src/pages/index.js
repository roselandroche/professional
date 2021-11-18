import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Heading } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StaggeredCards from "../components/staggeredCards"

let cards = [
  {
    title: "Convenient",
    content: "Never forget a story from a job that illustrates your strengths!",
  },
  {
    title: "Safe",
    content:
      "Save secure documents in one central place, never lose a tax document again!",
  },
  {
    title: "Central",
    content:
      "Keep all employment information in one place, no need to look for hours at a time to find the contact information for your references!",
  },
]

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <Heading as="h1" variant="styles.h1">
      Welcome to:
      <br /> Professional History!
    </Heading>
    <p>
      We aspire to create a convenient and secure space to save all things jobs
      related, if and when you are moving between jobs.
    </p>
    <StaggeredCards cards={cards} />
    <p>
      <Link to="/jobs/">Go to Jobs</Link> <br />
      <Link to="/education/">Go to Education</Link> <br />
      <Link to="/volunteer/">Go to Volunteer</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default Home
