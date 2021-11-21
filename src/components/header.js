/** @jsx jsx */
import { jsx, Heading, Box } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import theme from "../gatsby-plugin-theme-ui/index"

const Header = ({ siteTitle }) => (
  <Box
    sx={{
      bg: theme.colors.primary,
      mb: `1.45rem`,
    }}
  >
    <Box
      sx={{
        m: `0 auto`,
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,

        "*": {
          fontFamily: theme.fonts.heading,
          color: "white",
          textDecoration: "none",
        },

        a: {
          ":hover, :focus": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Heading as="h4" variant="styles.h4" sx={{ m: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </Heading>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
