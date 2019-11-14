import React from "react"
import { graphql } from "gatsby"
import DocsLayout from "../layouts/documentation"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <DocsLayout location={location}>
      <div style={{ maxWidth: 960, padding: "2em", margin: "auto" }}>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </DocsLayout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
