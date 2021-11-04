import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

const Accordion = props => {
  const { jobs } = props
  return (
    <Box>
      {jobs &&
        jobs.length > 1 &&
        jobs.map((o, i) => {
          return (
            <Box key={i}>
              <Heading as="h2" variant="styles.h2">
                {o.title}
              </Heading>
              <Text>{o.description}</Text>
            </Box>
          )
        })}
    </Box>
  )
}

export default Accordion
