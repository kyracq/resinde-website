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
import Cursor from "./cursor"

const Global = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 32px;
  }
  h1 {
    font-size: 64px;
  }
  h2 {
    font-size: 48px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 21px;
  }
  p {
    font-size: 18px;
  }
  header {
    font-family: "Montserrat", sans-serif;
  }
  body {
    font-family: "Muli", sans-serif;
  }
  * {
    cursor: none;
    scroll-behavior: smooth;
  }
`

const isMobile = () => {
  const ua = navigator.userAgent
  return /Android|Mobi/i.test(ua)
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNavLinksQuery {
      site {
        siteMetadata {
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  let cursor
  if (typeof navigator !== "undefined" && isMobile()) {
    cursor = null
  } else {
    cursor = <Cursor />
  }

  return (
    <>
      <GlobalStyles />
      <Global />
      {cursor}

      <div>
        <Header navLinks={data.site.siteMetadata?.navLinks} />
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
