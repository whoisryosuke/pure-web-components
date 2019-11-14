import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `var(--pure-color-dark-background)`,
      position: "relative",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <pure-menu
        horizontal
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/" className="pure-menu-link pure-menu-heading">
          {siteTitle}
        </Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to="/" className="pure-menu-link">
              Getting Started
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/" className="pure-menu-link">
              Components
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/" className="pure-menu-link">
              Theming
            </Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/" className="pure-menu-link">
              Github
            </Link>
          </li>
        </ul>
      </pure-menu>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Pure Web Components Docs`,
}

export default Header
