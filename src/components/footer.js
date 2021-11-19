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
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          a: {
            color: "inherit",
            textDecoration: "none",

            ":hover, :focus": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <GatsbyLink to="/">Home</GatsbyLink>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          a: {
            color: "inherit",
            textDecoration: "none",

            ":hover, :focus": {
              textDecoration: "underline",
            },
          },
        }}
      >
        <GatsbyLink to="/jobs/">Jobs</GatsbyLink>
        <GatsbyLink to="/education/">Education</GatsbyLink>
        <GatsbyLink to="/volunteer/">Volunteer</GatsbyLink>
      </Flex>
      <Flex sx={{ flexDirection: "column" }}>
        © {new Date().getFullYear()}
        <br />
        Built with
        {` `}
        <ThemeLink variant="styles.a" href="https://www.gatsbyjs.com">
          Gatsby
        </ThemeLink>
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
