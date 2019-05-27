/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"
// import "./layout.css"
import "./normalize.css"
import "./styles.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => {
      const { title, menuLinks } = data.site.siteMetadata
      return (
        <>
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css?family=Playfair+Display:400,600,700"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Open+Sans"
              rel="stylesheet"
            />
          </Helmet>
          <Header siteTitle={title} menuLinks={menuLinks} />
          <main>{children}</main>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
