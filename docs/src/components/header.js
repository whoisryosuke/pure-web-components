import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import throttle from "../utils/throttle"
import { useSidebarValue } from "../context/SidebarContext"

const Header = ({ siteTitle }) => {
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
  }, [siteTitle])
  return (
    <header className={`SiteHeader ${scrollPosition > 100 ? "scrolled" : ""}`}>
      <div>
        <pure-menu horizontal>
          <Link to="/" className="pure-menu-link pure-menu-heading">
            <h1>PURE</h1>
          </Link>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link to="/getting-started" className="pure-menu-link">
                Getting Started
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/components/pure-button" className="pure-menu-link">
                Components
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link to="/" className="pure-menu-link">
                Theming
              </Link>
            </li>
            <li className="pure-menu-item">
              <a
                href="https://github.com/whoisryosuke/pure-web-components"
                className="pure-menu-link"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="pure-menu-item pure-mobile-menu-btn">
              <button
                onClick={() =>
                  dispatch({
                    type: "toggleSidebar",
                    newSidebar: !sidebar,
                  })
                }
                className={`menu-link ${sidebar ? "" : "active"}`}
                aria-expanded={sidebar ? "true" : "false"}
                aria-controls="PrimarySidebar"
              >
                <span></span>
              </button>
            </li>
          </ul>
        </pure-menu>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Pure Web Components Docs`,
}

export default Header
