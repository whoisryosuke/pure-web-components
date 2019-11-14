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
        <Link to="/" className="pure-menu-link pure-menu-heading">
          Components
        </Link>
        <ul className="pure-menu-list">{componentList}</ul>
      </pure-menu>
    </nav>
  )
}
