import React from "react"
import { Link } from "gatsby"

export default function sidebar({ components, currentPage }) {
  const pages = [
    {
      name: "Getting Started",
      url: "/getting-started",
    },
    {
      name: "Components",
      url: "/components/pure-button",
    },
    {
      name: "Theming",
      url: "/theming",
    },
  ]
  const componentList = components.map(component => {
    const {
      node: {
        fields: { section, slug, filename },
      },
    } = component
    if (section === "components") {
      // Set active depending on currentPage vs slug
      return (
        <li
          className={`pure-menu-item ${
            currentPage.includes(slug.slice(0, -1)) ? `pure-menu-selected` : ""
          }`}
        >
          <Link to={slug} className="pure-menu-link">
            {`<`}
            {filename.replace("/", "")}
            {`>`}
          </Link>
        </li>
      )
    }
  })

  const pageList = pages.map(page => {
    // Set active depending on currentPage vs slug
    return (
      <li
        className={`pure-menu-item ${
          currentPage.includes(page.url) ? `pure-menu-selected` : ""
        }`}
      >
        <Link to={page.url} className="pure-menu-link">
          {page.name}
        </Link>
      </li>
    )
  })
  return (
    <nav className="Dashboard__sidebar">
      <pure-menu>
        <ul className="pure-menu-list">{pageList}</ul>
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
