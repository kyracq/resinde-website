import React from "react"
import { graphql } from "gatsby"
import tw from "twin.macro"

const PageContainer = tw.div`
  mobile:px-8 xl:px-14 px-20 pt-16
`

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
    <PageContainer>
      <h1>{page.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </PageContainer>
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