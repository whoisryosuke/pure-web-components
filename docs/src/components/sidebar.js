import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import throttle from "../utils/throttle"
import { useSidebarValue } from "../context/SidebarContext"

const Sidebar = ({ components, currentPage }) => {
  const [scrollPosition, updateScrollPosition] = useState()
  const [{ sidebar }, dispatch] = useSidebarValue()

  const changeScroll = () => {
    updateScrollPosition(document.documentElement.scrollTop)
  }

  const checkScroll = () => {
    throttle(changeScroll(), 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll)
    return () => {
      window.removeEventListener("scroll", checkScroll)
    }
  }, [currentPage])

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

  // Has the user scrolled enough to hide header?
  const isScrolled = scrollPosition > 100 ? "scrolled" : ""
  // User can manually hide sidebar (uses context)
  const hideSidebar = sidebar ? "hide" : "visible"
  return (
    <nav
      id="PrimarySidebar"
      className={`Dashboard__sidebar ${isScrolled} ${hideSidebar}`}
    >
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
          <li className="pure-menu-item">
            <a
              href="https://pure-web-components-storybook.netlify.com/"
              className="pure-menu-link"
              target="_blank"
            >
              Storybook
            </a>
          </li>
        </ul>
      </pure-menu>
    </nav>
  )
}

export default Sidebar
