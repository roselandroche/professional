/** @jsx jsx */
import { jsx, Box, Flex, Link as ThemeLink } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import theme from "../gatsby-plugin-theme-ui/index"

const Footer = () => (
  <Box
    role="contentinfo"
    sx={{
      bg: theme.colors.primary,
    }}
  >
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "space-between",
        m: `0 auto`,
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,
        color: theme.colors.background,

        "*": {
          fontFamily: theme.fonts.body,
          color: "inherit",
          textDecoration: "none",
        },

        a: {
          ":hover, :focus": {
            textDecoration: "underline",
          },
        },

        "@media(min-width: 460px)": {
          flexDirection: "row",
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
        <GatsbyLink id="job-link" to="/jobs/">
          Jobs
        </GatsbyLink>
        <GatsbyLink id="edu-link" to="/education/">
          Education
        </GatsbyLink>
        <GatsbyLink id="vol-link" to="/volunteer/">
          Volunteer
        </GatsbyLink>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          img: { objectFit: "contain!important", width: "fit-content" },
        }}
      >
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
          style={{
            marginBottom: `1.45rem`,
          }}
        />
      </Flex>
    </Flex>
  </Box>
)

export default Footer
