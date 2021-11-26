/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

// import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import theme from "../gatsby-plugin-theme-ui/index"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box
        sx={{
          minHeight: `calc(100vh - ${theme.headerHeight}px - ${theme.footerHeight}px)`,
          m: `0 auto`,
          maxWidth: 960,
          p: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
