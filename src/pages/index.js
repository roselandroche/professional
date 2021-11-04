import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Heading } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => (
  <Layout>
    <Seo title="Home" />
    <Heading as="h1" variant="styles.h1">
      Hi everyone!
    </Heading>
    <p>Welcome to RNL's newest project, built with Gatsby.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
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
