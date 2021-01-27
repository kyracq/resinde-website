import React from "react"
import { graphql } from "gatsby"

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
      <div>
        <h1>{page.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
  )
}

export default ProjectPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`