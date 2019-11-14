import React from "react"
import { graphql } from "gatsby"
import rehypeReact from "rehype-react"
import DocsLayout from "../layouts/documentation"
import SEO from "../components/seo"
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
  const { fields, frontmatter, htmlAst } = markdownRemark
  let pageTitle
  if (fields.section) {
    pageTitle = fields.filename.replace("/", "")
  } else {
    pageTitle = frontmatter && frontmatter.title
  }
  return (
    <DocsLayout location={location}>
      <SEO title={pageTitle} />
      {renderAst(htmlAst)}
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
      fields {
        slug
        filename
        section
      }
    }
  }
`
