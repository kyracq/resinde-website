import React from "react"
import { graphql } from "gatsby"
import tw, { styled } from "twin.macro"

const StyledHeaderDiv = tw.h1`
  mt-16
`

const PageContainer = styled.div`
  ${tw`flex flex-col`}
  margin-left: 8.75%;
  margin-right: 8.75%;
`

const ProjectPage = ({data}) => {
  const page = data.markdownRemark
  return (
    <PageContainer>
      <StyledHeaderDiv>
        <h1>{page.frontmatter.title}</h1>
      </StyledHeaderDiv>
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