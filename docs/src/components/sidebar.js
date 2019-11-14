import React from "react"
import { Link } from "gatsby"

export default function sidebar({ components, currentPage }) {
  const componentList = components.map(component => (
    <li
      className={`pure-menu-item ${currentPage === component.node.fields.slug &&
        `pure-menu-selected`}`}
    >
      <Link to={component.node.fields.slug} className="pure-menu-link">
        {`<`}
        {component.node.fields.filename.replace("/", "")}
        {`>`}
      </Link>
    </li>
  ))
  return (
    <nav className="Dashboard__sidebar">
      <pure-menu>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to="/getting-started" className="pure-menu-link">
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
        </ul>
        <span className="pure-menu-link pure-menu-heading">Components</span>
        <ul className="pure-menu-list">{componentList}</ul>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a
              href="https://github.com/whoisryosuke/pure-web-components"
              className="pure-menu-link"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </pure-menu>
    </nav>
  )
}
