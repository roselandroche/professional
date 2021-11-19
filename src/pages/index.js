import * as React from "react"
import { Heading, Text } from "theme-ui"

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
    <Text as="p" variant="styles.p">
      We aspire to create a convenient and secure space to save all things jobs
      related, if and when you are moving between jobs.
    </Text>
    <StaggeredCards cards={cards} />
  </Layout>
)

export default Home
