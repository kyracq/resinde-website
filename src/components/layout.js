/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "twin.macro"
import { createGlobalStyle } from "styled-components"
import "fontsource-montserrat/400.css"
import "fontsource-montserrat/700.css"
import "fontsource-muli"

import Header from "./header"
import Footer from "./footer"

const Global = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 32px;
  }
  header {
    font-family: "Montserrat";
  }
  body {
    font-family: "Muli";
  }
`

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
      <GlobalStyles />
      <Global />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
