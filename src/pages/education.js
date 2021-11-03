import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Education = () => (
  <Layout>
    <Seo title="Education" />
    <h1>Hi from the Education page</h1>
    <p>
      This page will store a list of your education history. Upon choosing one
      of the experiences listed, you will be able to view the title and
      description of the school/organization, extracurricular activities,
      reference(s), the complete contact information, at least one story of a
      challenge you experienced, an example of a strength in action, at least 3
      things learned, an example of a weakness in action, a link to a page
      containing transcripts and scans of degrees/certifications earned (highly
      secure), timeline
    </p>
    <Link to="/">Return Home</Link>
  </Layout>
)

export default Education
