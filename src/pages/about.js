import React from "react"
import SEO from "../components/seo"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledHeaderDiv = styled.div`
  ${tw`sm:px-32 mt-16 px-8`}
`
const StyledDiv = styled.div`
  ${tw`flex`}
`

const Header1 = styled.h1`
  ${tw`text-white text-7xl absolute`}
  top: 300px;
  left: 70px;
`

const Header2 = styled.h1`
  ${tw`text-white text-7xl absolute`}
  top: 200px;
  left: 70px;
`

const StyledTextDiv = styled.div`
  ${tw`mb-8 px-20`}
`

const LogosDiv = styled.div`
  ${tw`flex items-center space-x-16 ml-16`}
`

const SectionText = styled.div`
  ${tw`self-center flex-grow mr-8`}
`

const StyledList = tw.ul`
  list-disc list-inside
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pinkBlob: file(relativePath: { eq: "pink-blob-2.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yellowBlob: file(relativePath: { eq: "yellow-blob-2.png" }) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      usgLogo: file(relativePath: { eq: "usg-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="About" />
      <StyledHeaderDiv>
        <h1>About Us</h1>
        <p>
          A group at Princeton University focused on Research, Innovation, and
          Design. As a team of designers and developers, our mission is to drive
          impactful user experience solutions through user research and digital
          implementation.
        </p>
      </StyledHeaderDiv>
      <StyledDiv>
        <div style={{ position: "relative" }}>
          <Img fixed={data.pinkBlob.childImageSharp.fixed} />
          <Header1>Services</Header1>
        </div>
        <SectionText>
          <StyledTextDiv>
            <StyledList>
              <li>User Research</li>
              <li>Product Strategy</li>
              <li>UI/UX Design</li>
            </StyledList>
          </StyledTextDiv>
        </SectionText>
      </StyledDiv>
      <StyledDiv>
        <SectionText>
          <LogosDiv>
            <a
              href="https://www.tigerapps.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Img fixed={data.usgLogo.childImageSharp.fixed} />
            </a>
            <a
              href="https://just.cs.princeton.edu/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="354"
                height="174"
                viewBox="0 0 118 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2 39.65C9.13333 42.05 11.2 43.25 13.4 43.25C15.1 43.25 16.3667 42.8333 17.2 42C18.0333 41.1333 18.45 39.5667 18.45 37.3V22.55H5.7V16.4H25.8V37.9C25.8 39.5 25.5833 41.0167 25.15 42.45C24.75 43.85 24.0667 45.0833 23.1 46.15C22.1333 47.2167 20.8667 48.0667 19.3 48.7C17.7667 49.3 15.8833 49.6 13.65 49.6C12.75 49.6 11.8167 49.5 10.85 49.3C9.88333 49.1333 8.93333 48.8333 8 48.4C7.06667 47.9667 6.16667 47.4167 5.3 46.75C4.43333 46.05 3.65 45.2 2.95 44.2L7.2 39.65ZM60.7109 39.85C61.9443 40.85 63.2776 41.6667 64.7109 42.3C66.1776 42.9333 67.6276 43.25 69.0609 43.25C70.7609 43.25 71.9943 42.9667 72.7609 42.4C73.5609 41.8333 73.9609 41.0667 73.9609 40.1C73.9609 39.6 73.8443 39.1667 73.6109 38.8C73.3776 38.4333 73.0443 38.1167 72.6109 37.85C72.1776 37.55 71.6443 37.2833 71.0109 37.05C70.4109 36.7833 69.7109 36.5 68.9109 36.2L64.7109 34.4C63.8109 34.0667 62.9276 33.6333 62.0609 33.1C61.2276 32.5667 60.4943 31.95 59.8609 31.25C59.2276 30.5167 58.7109 29.6833 58.3109 28.75C57.9443 27.7833 57.7609 26.7 57.7609 25.5C57.7609 24.1667 58.0443 22.9167 58.6109 21.75C59.2109 20.55 60.0276 19.5167 61.0609 18.65C62.1276 17.75 63.3943 17.05 64.8609 16.55C66.3276 16.05 67.9443 15.8 69.7109 15.8C71.7109 15.8 73.6443 16.1667 75.5109 16.9C77.3776 17.6333 79.0609 18.7 80.5609 20.1L76.8109 24.75C75.6776 23.9167 74.5609 23.2833 73.4609 22.85C72.3609 22.3833 71.1109 22.15 69.7109 22.15C68.2776 22.15 67.1609 22.4167 66.3609 22.95C65.5943 23.45 65.2109 24.1667 65.2109 25.1C65.2109 26.1 65.7109 26.85 66.7109 27.35C67.7109 27.85 68.9943 28.3833 70.5609 28.95L74.5109 30.65C76.6776 31.45 78.3776 32.55 79.6109 33.95C80.8776 35.35 81.5109 37.2 81.5109 39.5C81.5109 40.8667 81.2276 42.1667 80.6609 43.4C80.0943 44.6 79.2776 45.6667 78.2109 46.6C77.1443 47.5 75.8276 48.2333 74.2609 48.8C72.6943 49.3333 70.8943 49.6 68.8609 49.6C66.6609 49.6 64.4776 49.2167 62.3109 48.45C60.1776 47.65 58.2276 46.4667 56.4609 44.9L60.7109 39.85ZM92.2414 22.6H82.4914V16.4H109.391V22.6H99.6414V49H92.2414V22.6Z"
                  fill="black"
                />
                <path
                  d="M33.56 15.92H39.44V32.56C39.44 34.1333 39.7333 35.3333 40.32 36.16C40.9067 36.9867 41.8267 37.4 43.08 37.4C44.3333 37.4 45.2533 36.9867 45.84 36.16C46.4533 35.3333 46.76 34.1333 46.76 32.56V15.92H52.44V31.96C52.44 35.3733 51.6667 37.9867 50.12 39.8C48.6 41.5867 46.2533 42.48 43.08 42.48C39.88 42.48 37.4933 41.5867 35.92 39.8C34.3467 37.9867 33.56 35.3733 33.56 31.96V15.92Z"
                  fill="#FFE069"
                />
                <rect x="35" y="47" width="17" height="4" fill="#FFE069" />
              </svg>
            </a>
          </LogosDiv>
        </SectionText>
        <div style={{ position: "relative" }}>
          <Img fixed={data.yellowBlob.childImageSharp.fixed} />
          <Header2>Supporters</Header2>
        </div>
      </StyledDiv>
    </div>
  )
}

export default AboutPage
