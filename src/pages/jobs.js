import * as React from "react"
import { Link } from "gatsby"
import { Heading } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Accordion from "../components/accordion"

const jobsContent = [
  {
    title: "Job 1",
    description: "Did x, y, and z",
    timeline: { start: "date", finish: "date" },
    connections: [
      {
        name: "Regina Phalange",
        relationship: "Project Manager",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "John Williams",
        relationship: "Team Leader",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Jane Smith",
        relationship: "Senior Manager",
        reference: false,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Shoplifter",
        description:
          "Customer looked suspicious. I paid close attention, noticed they slipped something into their pocket. Notified the security personnel, watched them until authorities arrived.",
        takeaway:
          "Sometimes the best plan of action is to call the proper person.",
      },
      {
        category: "Strength",
        title: "Perseverence",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
      {
        category: "Weakness",
        title: "Perfectionism",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
    ],

    whyLeft: "did not feel any potential to grow, etc...",
    officialDocs: ["tax link"],
  },
  {
    title: "Job 2",
    description: "Did x, y, and z",
    timeline: { started: "date", left: "date" },
    managers: [
      {
        name: "John Smith",
        relationship: "Team Leader",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Jane Smith",
        relationship: "Senior Manager",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Shoplifter",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
      {
        category: "Strength",
        title: "Perseverence",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
      {
        category: "Weakness",
        title: "Perfectionism",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
    ],
    whyLeft: "did not feel any potential to grow, etc...",
    officialDocs: ["tax link"],
  },
]

const Jobs = () => (
  <Layout>
    <Seo title="Jobs" />
    <Heading as="h1" variant="styles.h1">
      Hi from the Jobs page
    </Heading>
    <p>
      This page will store a list of your work history. Upon choosing one of the
      jobs you will be able to view the title and description of the job, your
      manager(s), your reference(s), the complete contact information, at least
      one story of a challenge you experienced, an example of a strength in
      action, at least 3 things learned, an example of a weakness in action, a
      link to a page containing tax documents (highly secure), why you left,
      timeline
    </p>
    <Accordion jobs={jobsContent} />
    <Link to="/">Return Home</Link>
  </Layout>
)

export default Jobs
