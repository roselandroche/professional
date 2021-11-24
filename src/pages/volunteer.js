import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Accordion from "../components/accordion"
import Introduction from "../components/introduction"

const volunteer = [
  {
    title: "SPCA",
    description:
      "Assisted in calming and re-establishing healthy relationships with abused dogs.",
    timeline: { start: "2006", finish: "N/A" },
    connections: [
      {
        name: "Abby Pend",
        relationship: "Manager",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Tyler Grey",
        relationship: "Co-volunteer",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Ruby - German Shepherd",
        description:
          "Ruby had been used as a breeder by her previous owners. She was terrified of humans when we rescued her, and wouldn't socialize with us or other dogs if there were people around. We had to dedicate hours every day to show Ruby we were friendly and no danger. In the end, Ruby transformed into an incredibly loving and affectionate dog.",
        takeaway: "Patience can overcome huge obstacles.",
      },
      {
        category: "Strength",
        title: "Consistency",
        description:
          "I naturally am a very consistent person. This was a great benefit to these volunteer efforts, because abused animals need to have normalcy re-established in order to be rehabilitated.",
        takeaway:
          "Using our natural strengths and growing them is a great way to help others more quickly.",
      },
      {
        category: "Weakness",
        title: "Being on Time",
        description:
          "I found it easy to forget about my scheduled shifts, and extracurricular obligations. In order to fix this issue, I had to become a regular user of a paper planner, and using reminders in my phone.",
        takeaway:
          "I can overcome my tendency to forget things by preparing properly.",
      },
    ],
    officialDocs: ["Proof of Volunteer Hours Spent"],
  },
  {
    title: "Nursing Home",
    description: "Comforted the elderly.",
    timeline: { start: "2012", finish: "2013" },
    connections: [
      {
        name: "Dorothy Smith",
        relationship: "Manager",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
      {
        name: "Jason Abbot",
        relationship: "Manager",
        reference: true,
        contact: { phone: 1111111111, email: "example@gmail.com" },
      },
    ],
    stories: [
      {
        category: "Challenge",
        title: "Dotty",
        description:
          "One of the residents, Dotty, had dementia and alzheimers. She often had moments where she did not recognize anyone around her. This terrified her, and was painful for staff and volunteers who had cultivated relationships with her. In her case, we were forced to accept that there was only so much we could do - and that meant trying to share as much comfort as we could. We also learned to prioritize our mental and emotional well being, as Dotty's case was particularly difficult on us.",
        takeaway:
          "Not all problems can be solved. In these cases, do what you can to help the situation, and also take care of yourself.",
      },
      {
        category: "Strength",
        title: "Consistency",
        description:
          "I naturally am a very consistent person. This was a great benefit to these volunteer efforts, because the elderly need to have a normal routine in order to feel like they are living well.",
        takeaway:
          "Using our natural strengths and growing them is a great way to help others.",
      },
      {
        category: "Weakness",
        title: "Being on Time",
        description:
          "I found it easy to forget about my scheduled shifts, and extracurricular obligations. In order to fix this issue, I had to become a regular user of a paper planner, and using reminders in my phone.",
        takeaway:
          "I can overcome my tendency to forget things by preparing properly.",
      },
    ],
    officialDocs: ["Proof of Volunteer Hours Spent"],
  },
]

const Volunteer = () => (
  <Layout>
    <Seo title="Volunteer" />
    <Introduction
      heading={"Volunteering"}
      description={
        "This page will store a list of your volunteer history. Upon choosing one of the experiences you will be able to view the title and description, your manager(s)/contacts, your reference(s), the complete contact information of the organization, at least one story of a challenge you experienced, an example of a strength in action, at least 3 things learned, an example of a weakness in action, a link to a page containing any documentation (highly secure), timeline..."
      }
    />
    <Accordion content={volunteer} />
  </Layout>
)

export default Volunteer
