import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

const storyCards = props => {
  const { stories } = props

  return (
    <Box>
      {stories &&
        stories.map((story, i) => {
          return (
            <Box key={i}>
              <Heading as="h2" children={story.category} />
              <Heading as="h4">{story.title}</Heading>
              <Text as="p">{story.description}</Text>
              <Text as="p">{story.takeaway}</Text>
            </Box>
          )
        })}
    </Box>
  )
}

export default storyCards
