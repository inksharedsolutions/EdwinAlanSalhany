/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"
import "../assets/scss/style.scss"

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
      <Header
          siteTitle={
            data.site.siteMetadata.title
          } />

        <main>
          {children}
        </main>
        
        <Footer navList={
          ['Home',
          'About the Author',
          'Books', 
          'Contact']}
        />
    </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
