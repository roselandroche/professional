import * as React from "react"
// import { Link } from "gatsby"
import { Box, Flex, Heading, Text } from "theme-ui"

const Connections = props => {
  const { connections } = props

  return (
    <Box>
      <Heading as="h3" variant="styles.h3">
        Connections
      </Heading>
      <Flex
        sx={{
          justifyContent: "space-between",
          flexDirection: "column",

          "@media(min-width: 600px)": { flexDirection: "row" },
        }}
      >
        {connections &&
          connections.map((connection, i) => {
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
                <Heading as="h4" variant="styles.h4">
                  {connection.name}
                </Heading>
                <Text as="p" variant="styles.p">
                  Relationship: {connection.relationship}
                </Text>
                {connection.reference && (
                  <Text as="p">Agreed to Reference</Text>
                )}
                {connection.contact && (
                  <>
                    <Heading as="h5" variant="styles.h5">
                      Contact Information
                    </Heading>
                    <Text as="p" variant="styles.p">
                      Phone: {connection.contact.phone}
                      <br />
                      Email: {connection.contact.email}
                    </Text>
                  </>
                )}
              </Box>
            )
          })}
      </Flex>
    </Box>
  )
}

export default Connections
