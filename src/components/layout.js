/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `0 1.0875rem 1.45rem`,
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          marginTop: `2rem`,
          display: `flex`,
          justifyContent: `space-around`,
        }}
      >
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/impressum">Impressum</Link>
      </footer>
    </div>
  )
}

export default Layout
