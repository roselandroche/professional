/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import theme from "../gatsby-plugin-theme-ui/index"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      bg: theme.colors.primary,
      mb: `1.45rem`,
    }}
  >
    <div
      sx={{
        m: `0 auto`,
        maxWidth: 960,
        p: `1.45rem 1.0875rem`,
      }}
    >
      <h1 sx={{ m: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
