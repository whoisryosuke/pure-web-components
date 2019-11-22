import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Sidebar from "../components/sidebar"
import { SidebarProvider } from "../context/SidebarContext"

import "./documentation.css"

export default ({ children, location }) => {
  const initialState = {
    sidebar: true,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleSidebar":
        return {
          ...state,
          sidebar: action.newSidebar,
        }

      default:
        return state
    }
  }

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              filename
              section
            }
          }
        }
      }
    }
  `)
  return (
    <SidebarProvider initialState={initialState} reducer={reducer}>
      <pure-base>
        <Helmet>
          <script
            type="module"
            src="/dist/pure-web-components/pure-web-components.esm.js"
          ></script>
          <script nomodule="" src="/dist/pure-web-components.js"></script>
        </Helmet>
        <Header />
        <main className="Dashboard">
          <Sidebar
            currentPage={location.pathname}
            components={data.allMarkdownRemark.edges}
          />
          <section className="Dashboard__content">
            <div className="content">{children}</div>
          </section>
        </main>
      </pure-base>
    </SidebarProvider>
  )
}
