import * as React from "react"
import { Box, Heading, Text } from "theme-ui"

const storyCards = props => {
  const { stories } = props

  return (
    <Box>
      {stories &&
        stories.map((story, i) => {
          return (
            <Box
              key={i}
              sx={{
                width: "1/3%",
                border: `2px solid gray`,
                borderRadius: "8px",
                p: 3,
                my: 2,
              }}
            >
              <Heading as="h4" variant="styles.h4" children={story.category} />
              <Heading as="h5" variant="styles.h5">
                {story.title}
              </Heading>
              <Text as="p" variant="styles.p">
                {story.description}
              </Text>
              <Text as="p" variant="styles.p">
                Takeaway: {story.takeaway}
              </Text>
            </Box>
          )
        })}
    </Box>
  )
}

export default storyCards
