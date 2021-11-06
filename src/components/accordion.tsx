import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

import Manager from "./manager"
import StoryCards from "./storyCards"

const Accordion = props => {
  const { jobs } = props
  return (
    <Box>
      {jobs &&
        jobs.length > 1 &&
        jobs.map((o, i) => {
          return (
            <Box key={i}>
              {o.title && (
                <Heading as="h2" variant="styles.h2">
                  {o.title}
                </Heading>
              )}
              {o.description && <Text as="p">{o.description}</Text>}
              {o.timeline.start && o.timeline.finish && (
                <Text as="p">
                  {o.timeline.start}
                  {" - "}
                  {o.timeline.finish}
                </Text>
              )}
              {o.managers && <Manager managers={o.managers} />}
              {o.stories && <StoryCards stories={o.stories} />}
              {o.whyLeft && <Text as="p">Reason for Leaving: {o.whyLeft}</Text>}
              {o.officialDocs && (
                <Text as="p">Link to official documentation-TBD</Text>
              )}
            </Box>
          )
        })}
    </Box>
  )
}

export default Accordion
