import React, { useState } from "react"
import { Box, Heading, Text } from "theme-ui"

import Connections from "./connections"
import StoryCards from "./storyCards"

const Accordion = props => {
  const { content } = props
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
      {content &&
        content.length > 1 &&
        content.map((o, i) => {
          return (
            <Box key={i}>
              <Box
                onClick={() => handleClick(i)}
                sx={{ borderBottom: `2px solid gray`, cursor: "pointer" }}
              >
                {o.title && (
                  <Heading as="h2" variant="styles.h2">
                    {o.title}
                  </Heading>
                )}
              </Box>
              <Box sx={{ display: active !== i ? "none" : "block" }}>
                {o.description && (
                  <Text as="p" variant="styles.p">
                    Description: {o.description}
                  </Text>
                )}
                {o.timeline.start && o.timeline.finish && (
                  <Text as="p" variant="styles.p">
                    From: {o.timeline.start}
                    {" to "}
                    {o.timeline.finish}
                  </Text>
                )}
                {o.connections && <Connections connections={o.connections} />}
                {o.stories && <StoryCards heading={true} stories={o.stories} />}
                {o.whyLeft && (
                  <Text as="p" variant="styles.p">
                    Reason for Leaving: {o.whyLeft}
                  </Text>
                )}
                {o.specialAwards && (
                  <StoryCards heading={false} stories={o.specialAwards} />
                )}
                {o.officialDocs && (
                  <Text as="p" variant="styles.p">
                    Link to official documentation-TBD
                  </Text>
                )}
              </Box>
            </Box>
          )
        })}
    </Box>
  )
}

export default Accordion
