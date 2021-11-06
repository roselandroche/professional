import * as React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text } from "theme-ui"

const Manager = props => {
  const { managers } = props

  return (
    <Box>
      {managers &&
        managers.map((manager, i) => {
          return (
            <Box key={i}>
              <Heading as="h2">Manager: {manager.name}</Heading>
              <Text as="p">Working Relationship: {manager.relationship}</Text>
              {manager.reference && <Text as="p">Agreed to Reference</Text>}
              <Text as="p">
                Contact Information
                <br />
                Phone: {manager.contact.phone}
                <br />
                Email: {manager.contact.email}
              </Text>
            </Box>
          )
        })}
    </Box>
  )
}

export default Manager
