import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Jobs = () => (
  <Layout>
    <Seo title="Jobs" />
    <h1>Hi from the Jobs page</h1>
    <p>
      This page will store a list of your work history. Upon choosing one of the
      jobs you will be able to view the title and description of the job, your
      manager(s), your reference(s), the complete contact information, at least
      one story of a challenge you experienced, an example of a strength in
      action, at least 3 things learned, an example of a weakness in action, a
      link to a page containing tax documents (highly secure), why you left,
      timeline
    </p>
    <Link to="/">Return Home</Link>
  </Layout>
)

export default Jobs
