import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

import "./documentation.css"

export default ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      sidebar: allMarkdownRemark {
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
      title: site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <pure-base>
      <Helmet>
        <title>{data.title.siteMetadata.title}</title>
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
          components={data.sidebar.edges}
        />
        <section className="Dashboard__content">
          <div className="content">{children}</div>
        </section>
      </main>
    </pure-base>
  )
}
