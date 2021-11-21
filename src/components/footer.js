/** @jsx jsx */
import { jsx, Box, Flex, Link as ThemeLink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import theme from "../gatsby-plugin-theme-ui/index"

const Footer = () => (
  <Box
    sx={{
      bg: theme.colors.primary,
    }}
  >
    <Flex
      sx={{
        justifyContent: "space-between",
        m: `0 auto`,
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,
        color: theme.colors.background,

        "*": {
          fontFamily: theme.fonts.body,
          color: "inherit",
          textDecoration: "none",

          ":hover, :focus": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <GatsbyLink to="/">Home</GatsbyLink>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
        }}
      >
        <GatsbyLink to="/jobs/">Jobs</GatsbyLink>
        <GatsbyLink to="/education/">Education</GatsbyLink>
        <GatsbyLink to="/volunteer/">Volunteer</GatsbyLink>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        <Box>
          © {new Date().getFullYear()}
          <br />
          Built with
          {` `}
          <ThemeLink variant="styles.a" href="https://www.gatsbyjs.com">
            Gatsby
          </ThemeLink>
        </Box>
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={100}
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </Flex>
    </Flex>
  </Box>
)

export default Footer
