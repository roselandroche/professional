import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Accordion from "../components/accordion"

const education = [
  {
    title: "High School",
    description: "General Studies",
    timeline: { start: "2004", finish: "2008" },
    connections: [
      {
        name: "Ms. Jones",
        relationship: "Math Teacher",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Mr. Adams",
        relationship: "Art Teacher",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Mx. Lindel",
        relationship: "Choir Teacher",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Meeting New People",
        description:
          "I'm very shy, so it's always difficult to meet new people. I challenged myself to join an extracurricular group to push myself to meet people. It was very challenging, but I made a new friend and got stronger as a person.",
        takeaway:
          "Pushing past the feeling of discomfort can yield great results.",
      },
      {
        category: "Strength",
        title: "Academics",
        description:
          "I excelled in studying and learning new information quickly, resulting in a 3.9 GPA.",
        takeaway:
          "There is a lot of information in the world, and I can learn it if I apply myself.",
      },
      {
        category: "Weakness",
        title: "Forgetfulness",
        description:
          "I found it easy to forget about assignments, and extracurricular obligations. In order to fix this issue, I had to become a regular user of a paper planner, and using reminders in my phone.",
        takeaway:
          "I can overcome my tendency to forget things by preparing properly.",
      },
    ],

    specialAwards: [
      { title: "Special Award 1", description: "I won this because ... " },
      { title: "Special Award 2", description: "I won this because ... " },
    ],
    officialDocs: ["Graduation Certificate", "Transcript"],
  },
  {
    title: "College",
    description: "Business",
    timeline: { start: "2008", finish: "2012" },
    connections: [
      {
        name: "Ms. Jones",
        relationship: "Psych Professor",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Mr. Adams",
        relationship: "Sociology Professor",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Mx. Lindel",
        relationship: "English Literature Professor",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Meeting New People",
        description:
          "I'm very shy, so it's always difficult to meet new people. I challenged myself to join an extracurricular group to push myself to meet people. It was very challenging, but I made a new friend and got stronger as a person.",
        takeaway:
          "Pushing past the feeling of discomfort can yield great results.",
      },
      {
        category: "Strength",
        title: "Academics",
        description:
          "I excelled in studying and learning new information quickly, resulting in a 3.9 GPA.",
        takeaway:
          "There is a lot of information in the world, and I can learn it if I apply myself.",
      },
      {
        category: "Weakness",
        title: "Forgetfulness",
        description:
          "I found it easy to forget about assignments, and extracurricular obligations. In order to fix this issue, I had to become a regular user of a paper planner, and using reminders in my phone.",
        takeaway:
          "I can overcome my tendency to forget things by preparing properly.",
      },
    ],

    specialAwards: [
      { title: "Special Award 1", description: "I won this because ... " },
      { title: "Special Award 2", description: "I won this because ... " },
    ],
    officialDocs: ["Graduation Certificate", "Transcript"],
  },
]

const Education = () => (
  <Layout>
    <Seo title="Education" />
    <h1>Education</h1>
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
    <Accordion content={education} />
  </Layout>
)

export default Education
