import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import BackgroundImage from "gatsby-background-image"

const StyledH1 = tw.h1`
  text-white text-xl items-center
`

const AboutSection = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blue-blob.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <section id={props.id}>
      <BackgroundImage
        fluid={data.placeholderImage.childImageSharp.fluid}
        role=""
      >
        <StyledH1>About Us</StyledH1>
      </BackgroundImage>
    </section>
  )
}

export default AboutSection
