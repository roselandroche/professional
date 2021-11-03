import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Volunteer = () => (
  <Layout>
    <Seo title="Volunteer" />
    <h1>Hi from the Volunteer page</h1>
    <p>
      This page will store a list of your volunteer history. Upon choosing one
      of the experiences you will be able to view the title and description,
      your manager(s)/contacts, your reference(s), the complete contact
      information of the organization, at least one story of a challenge you
      experienced, an example of a strength in action, at least 3 things
      learned, an example of a weakness in action, a link to a page containing
      any documentation (highly secure), timeline
    </p>
    <Link to="/">Return Home</Link>
  </Layout>
)

export default Volunteer
