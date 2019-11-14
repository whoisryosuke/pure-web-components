import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Sidebar from "../components/sidebar"

export default ({ children }) => {
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
    <React.Fragment>
      <Helmet>
        <script
          type="module"
          src="/dist/pure-web-components/pure-web-components.esm.js"
        ></script>
        <script nomodule="" src="/dist/pure-web-components.js"></script>
      </Helmet>
      <Header />
        <Sidebar components={data.allMarkdownRemark.edges} />
  )
}
