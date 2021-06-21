import * as React from "react"
import { Link } from "gatsby"
import Button from "react-bootstrap/Button"

const Nav = () => (
  <header
    style={{
      marginBottom: `1rem`,
      marginTop: `1rem`,
      textTransform: `uppercase`,
      display: `flex`,
      justifyContent: `space-between`,
      alignItems: `center`,
    }}
  >
    <Button href="/" className="button" variant="outline-dark" size="lg">
      Back
    </Button>
    <h3
      style={{
        marginBottom: `0rem`,
      }}
    >
      Viktory One
    </h3>
  </header>
)

export default Nav
