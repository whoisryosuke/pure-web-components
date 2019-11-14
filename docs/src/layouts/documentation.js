import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

import "./documentation.css"

export default ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              filename
            }
          }
        }
      }
    }
  `)
  return (
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
        <section className="Dashboard__content">{children}</section>
      </main>
    </pure-base>
  )
}
