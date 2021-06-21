import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    style={{
      marginBottom: `1rem`,
      marginTop: `1rem`,
      textAlign: `center`,
      textTransform: `uppercase`,
    }}
  >
    <Link to="/"><h3>
      Viktory One
    </h3></Link>
  </header>
)

export default Header
