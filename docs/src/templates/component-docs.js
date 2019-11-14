import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import DocsLayout from "../layouts/documentation"
import PageHeader from "../components/pageHeader"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      table: "pure-table",
      "page-header": PageHeader,
    },
  }).Compiler
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark
  return (
    <DocsLayout location={location}>
      <div style={{ maxWidth: 960, padding: "2em", margin: "auto" }}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {renderAst(htmlAst)}
      </div>
    </DocsLayout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`
