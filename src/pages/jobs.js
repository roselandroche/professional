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
    challenge: [
      {
        title: "Shoplifter",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
      {
        title: "Project",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
    ],
    strength: [
      {
        title: "Persistence",
        example: "Did stuff",
        benefit: "Learned stuff",
      },
      {
        title: "Persistence",
        example: "Did stuff",
        benefit: "Learned stuff",
      },
    ],
    weakness: [
      {
        title: "Persistence",
        example: "Did stuff",
        growth: "Learned stuff",
      },
      {
        title: "Persistence",
        example: "Did stuff",
        growth: "Learned stuff",
      },
    ],
    learned: [
      {
        title: "Skill 1",
        story: "Did stuff",
        summary: "Learned stuff",
      },
      {
        title: "Skill 2",
        story: "Did stuff",
        summary: "Learned stuff",
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
    challenge: [
      {
        title: "Shoplifter",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
      {
        title: "Project",
        description: "Did stuff",
        takeaway: "Learned stuff",
      },
    ],
    strength: [
      {
        title: "Persistence",
        example: "Did stuff",
        benefit: "Learned stuff",
      },
      {
        title: "Persistence",
        example: "Did stuff",
        benefit: "Learned stuff",
      },
    ],
    weakness: [
      {
        title: "Persistence",
        example: "Did stuff",
        growth: "Learned stuff",
      },
      {
        title: "Persistence",
        example: "Did stuff",
        growth: "Learned stuff",
      },
    ],
    learned: [
      {
        title: "Skill 1",
        story: "Did stuff",
        summary: "Learned stuff",
      },
      {
        title: "Skill 2",
        story: "Did stuff",
        summary: "Learned stuff",
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
