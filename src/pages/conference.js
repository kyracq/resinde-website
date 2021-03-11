import React from "react"
import tw, { styled } from "twin.macro"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"

const PageContainer = styled.div`
  font-family: "Cabin", sans-serif;
`

const HeaderSection = tw.div`
  flex flex-row items-center space-x-28 h-screen mobile:px-8 px-48
    xl:flex-col xl:space-x-0 xl:items-start xl:space-y-20
`

const About = tw.div`
  w-5/12 xl:order-2 xl:w-full xl:pt-8
`

const SectionTitle = tw.h1`
  leading-none mobile:text-5xl pb-2
`

const LogoDiv = tw.div`
  w-7/12 order-2 xl:order-1 xl:pt-16 mobile:pt-0
`

const StyledButton = styled.a`
  ${tw`block border-2 border-orange bg-orange text-white py-2 px-6
  hover:bg-white hover:text-orange transition text-center`}
  font-size: 18px;
  border-radius: 0px 25px 25px 0px;
  margin-top: 25px;
  width: 120px;
`

const ScheduleSection = tw.div`
  bg-orange mobile:px-8 px-48 py-16 text-center text-white
`

const Schedule = styled.div`
  ${tw`relative text-black text-left pt-5`}
  max-width: 1200px;
  margin: 0 auto;

  /* Vertical ruler of timeline */
  &:after {
    ${tw`absolute bg-white text-left top-0 bottom-0 left-1/2 rounded-full`}
    content: '';
    width: 6px;
    margin-left: -3px;
  }

  @media (max-width: 1023px) {
    &:after {
      left: 31px;
    }
  }
`

const EventContainer = styled.div`
  ${tw`relative w-1/2 lg:w-full`}
  padding: 10px 40px;
  left: ${props => props.left ? "0" : "50%"};

  /* Circles on timeline */
  &:after {
    ${tw`absolute top-0 bg-white`}
    content: '';
    width: 30px;
    height: 30px;
    right: ${props => props.left ? "-15px" : ""};
    left: ${props => props.left ? "" : "-15px"};
    border-radius: 50%;
  }

  @media (max-width: 1023px) {
    padding-left: 70px;
    padding-right: 25px;
    left: ${props => props.left ? "" : "0%"};

    &:after {
      left: 15px;
    }
  }
`

const EventContent = styled.div`
${tw`py-10 px-10 bg-white relative`}
  border-radius: ${props => props.left ? "15px 0px 15px 15px" : "0px 15px 15px 15px"} ;
`

const EventName = styled.h2`
  ${tw`leading-tight py-4`}
  font-size: 36px;
`

const EventSpeaker = styled.a`
  ${tw`hover:text-orange`}
  font-size: 24px;
  font-weight: 700;
`

const Event = (props) => {
  return (
    <EventContainer left={props.left}>
      <EventContent left={props.left}>
        <p>{props.time}</p>
        <EventName className='idea-heading'>{props.eventName}</EventName>
        <p>{props.blurb}</p>
        <br />
        <EventSpeaker href={props.href}>{props.speaker}</EventSpeaker>
        <p>{props.role}</p>
        <EventSpeaker href={props.href2}>{props.speaker2}</EventSpeaker>
        <p>{props.role2}</p>
      </EventContent>
    </EventContainer>
  )
}

const SpeakersSection = tw.div`
  mobile:px-8 px-48 py-16 text-center
`

const SpeakerGrid = tw.div`
  grid grid-cols-4 gap-x-8 gap-y-8 self-center
    xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1
`

const Speaker = tw.div`
  text-left
`

const SpeakerInfo = tw.div`
  pt-3 pb-6
`

const FundersSection = tw.div`
  bg-honey mobile:px-8 px-48 py-16 text-center text-black
`

const ConferencePage = ({ data }) => (
  <PageContainer>
    <SEO title="IDEA Conference" />
    <HeaderSection>
      <About>
        <h3 className='idea-heading' style={{ fontWeight:"normal"}}>
          MARCH 13-14
        </h3>
        <SectionTitle className='idea-heading' style={{ marginTop: "8px",
  marginBottom: "16px"}}>2021 IDEA Conference</SectionTitle>
        <p>
          IDEA is Princeton ResInDe’s first conference on inclusion, 
          diversity, equity, and accessibility. Speakers from Google, 
          IDEO, and more will discuss why it’s necessary to create 
          inclusive and accessible products and processes as well as how
          to do it. {" "}
          <b>
          Open to all university undergraduate and graduate students as 
          well as Princeton affiliates. Register with your .edu address.
          </b>
        </p>
        <StyledButton href="https://bit.ly/resindeidea">
          Register
        </StyledButton>
      </About>
      <LogoDiv>
        <img src={data.IdeaLogo.publicURL} alt="Shapes spelling out idea." />
      </LogoDiv>
    </HeaderSection>
    <ScheduleSection>
      <SectionTitle className='idea-heading'>Schedule</SectionTitle>
      <p>More details coming soon!</p>
      <br /><br />
      <h2 className='idea-heading'>Saturday, March 13</h2>
      <br />
      <Schedule>
        <Event 
          left="true" 
          time="10:00 AM - 11:00 AM ET"
          eventName="Design Thinking for Ethics? Or Ethics for Design Thinking?"
          blurb="Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
          ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
          Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
          habeo iusto primis ea eam."
          speaker="David Miller, PhD"
          href="#david"
          role="Director @ Princeton University Faith & Work Initiative, 
              Keller Center for Innovation"
        />
        <Event 
          time="11:30 AM - 12:30 PM ET"
          eventName="Making Innovation Meaningful"
          blurb="Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
          ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
          Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
          habeo iusto primis ea eam."
          speaker="Rob Van Varick"
          href="#rob"
          role="Partner @ Michael Graves Design"
        />
        <Event 
          left="true"
          time="2:00 PM - 3:00 PM ET"
          eventName="Intro to Accessible Design"
          blurb="Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
          ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
          Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
          habeo iusto primis ea eam."
          speaker="Catherine Idylle ‘16"
          href="#catherine"
          role="Partner @ Michael Graves Design"
        />
        <Event 
          time="3:30 PM - 4:30 PM ET"
          eventName="Design Without Ego"
          blurb="Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
          ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
          Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
          habeo iusto primis ea eam."
          speaker="Yicheng 'YC' Sun ‘17"
          href="#yc"
          role="Design Lead @ IDEO"
          speaker2="Zena Barakat"
          href2="#zena"
          role2="Design Director @ IDEO"
        />
      </Schedule>
      <br /><br /><br />
      <h2 className='idea-heading'>Sunday, March 14</h2>
      <br />
      <Schedule>
        <Event 
          left="true"
          time="11:30 AM - 12:30 PM ET"
          eventName="Designing for Inclusion @ Presently: From Product to People"
          blurb="Lorem ipsum dolor sit amet, quo ei simul congue exerci, 
          ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. 
          Ea quis iuvaret expetendis his, te elit voluptua dignissim per, 
          habeo iusto primis ea eam."
          speaker="Dalia Katan ‘15"
          href="#dalia"
          role="CEO & Founder @ Presently"
        />
      </Schedule>
    </ScheduleSection>
    <SpeakersSection>
      <SectionTitle className='idea-heading'>Speakers</SectionTitle>
      <p>Stay tuned for more speakers!</p>
      <br /><br />
      <SpeakerGrid>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Speaker id={node.frontmatter.featuredImage.name}>
              <Img
                key={node.frontmatter.name}
                fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                alt={node.frontmatter.featuredImageAlt}
                objectFit="contain"
                objectPosition="center"
              />
              <SpeakerInfo>
                <h3>
                  {node.frontmatter.name}
                </h3>
                <p>{node.frontmatter.role}</p>
              </SpeakerInfo>
              <p style={{ fontSize: '15px' }}>{node.frontmatter.bio}</p>
            </Speaker>
          )
        })}
      </SpeakerGrid>
    </SpeakersSection>
    <FundersSection>
      <SectionTitle className='idea-heading'>Funders</SectionTitle>
      <p>We are proudly funded by Princeton's Department of Art & 
      Archaeology and Princeton Projects Board.</p>
      <br /><br />
      <Img fixed={data.AALogo.childImageSharp.fixed} 
        alt="Logo saying Arts and Archeology Department." />
      <Img fixed={data.ProjectsBoardLogo.childImageSharp.fixed} 
        alt="Logo saying Projects Board." />
    </FundersSection>
  </PageContainer>
)

export default ConferencePage

export const query = graphql`
  query {
    IdeaLogo: file(relativePath: { eq: "logos/idea-logo.svg" }) {
      publicURL
    }
    AALogo: file(relativePath: { eq: "logos/aa-logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }    }
    ProjectsBoardLogo: file(relativePath: { eq: "logos/projects-board-logo.png" }) {
      childImageSharp {
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }    }
    allMarkdownRemark(
      sort: { fields: fileAbsolutePath, order: DESC }
      filter: { fileAbsolutePath: { regex: "/(speakers)/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            role
            bio
            featuredImage {
              name
              childImageSharp {
                fixed(height: 225) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            featuredImageAlt
          }
        }
      }
    }
  }
`
