import * as React from "react"
import { Box, Flex, Heading, Text } from "theme-ui"

const StaggeredCards = props => {
  const { cards } = props

  return (
    <Box>
      <Flex sx={{ flexDirection: "column" }}>
        {cards &&
          cards.map((card, i) => {
            return (
              <Flex
                key={i}
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                  border: `2px solid gray`,
                  borderRadius: "8px",
                  py: 3,
                  px: 4,
                  my: 3,
                  ml: i % 2 !== 0 && "auto",
                }}
              >
                {card.title && (
                  <Heading as="h4" variant="styles.h4" children={card.title} />
                )}
                {card.content && (
                  <Text as="p" variant="styles.p" children={card.content} />
                )}
              </Flex>
            )
          })}
      </Flex>
    </Box>
  )
}

export default StaggeredCards
