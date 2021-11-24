import * as React from "react"
import { Heading, Text } from "theme-ui"

type DataProps = {
  heading?: string
  description?: string
}

const Introduction: React.FC<DataProps> = ({ heading, description }) => (
  <>
    {heading && <Heading as="h1" variant="styles.h1" children={heading} />}
    {description && <Text as="p" variant="styles.p" children={description} />}
  </>
)

export default Introduction
