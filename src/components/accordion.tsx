import React, { useState } from "react"
// import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

import Manager from "./manager"
import StoryCards from "./storyCards"

const Accordion = props => {
  const { jobs } = props
  const [active, setActive] = useState(null)

  const handleClick = i => {
    if (active === i) {
      setActive(null)
    } else if (active !== i) {
      setActive(i)
    }
  }

  return (
    <Box>
      {jobs &&
        jobs.length > 1 &&
        jobs.map((o, i) => {
          return (
            <Box key={i}>
              <Box
                onClick={() => handleClick(i)}
                sx={{ borderBottom: `2px solid gray` }}
              >
                {o.title && (
                  <Heading as="h2" variant="styles.h2">
                    {o.title}
                  </Heading>
                )}
              </Box>
              <Box sx={{ display: active !== i ? "none" : "block" }}>
                {o.description && (
                  <Text as="p">Description: {o.description}</Text>
                )}
                {o.timeline.start && o.timeline.finish && (
                  <Text as="p">
                    From: {o.timeline.start}
                    {" to "}
                    {o.timeline.finish}
                  </Text>
                )}
                {o.managers && <Manager managers={o.managers} />}
                {o.stories && <StoryCards stories={o.stories} />}
                {o.whyLeft && (
                  <Text as="p">Reason for Leaving: {o.whyLeft}</Text>
                )}
                {o.officialDocs && (
                  <Text as="p">Link to official documentation-TBD</Text>
                )}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default Accordion
