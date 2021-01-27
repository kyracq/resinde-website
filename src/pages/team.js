import React from "react"
import tw, { styled } from "twin.macro"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16
`

const PageContainer = styled.div`
  ${tw`flex flex-col space-y-14`}
  margin-left: 8.75%;
  margin-right: 8.75%;
`

const People = styled.div`
  ${tw`grid grid-cols-3 gap-x-6`}
`

let Members = [
  'Ashley	To \'22',
  'Jacqueline	Xu \'22',
  'Kyra	Acquah \'22',
  'Joanna	Kuo \'22',
  'Manasseh	Alexander \'21',
  'Simanga Ndhlovu \'22',
  'Thanya Begum \'23',
  'Iroha Shirai \'23',
  'Begum Ortaoglu \'22',
  'Megan Specht \'23',
  'Sophie	Torres \'21',
  'Ameya Vaidya \'24',
  'Howard	Yen \'23',
]

const TeamPage = () => (
  <PageContainer>
    <SEO title="Our Team" />
    <StyledHeaderDiv>
      <h1>Our Team</h1>
      <p>
          A group at Princeton University focused on Research, Innovation, and
          Design. As a team of designers and developers, our mission is to drive
          impactful user experience solutions through user research and digital
          implementation.
      </p>
    </StyledHeaderDiv>
    <People>
      {Members.map((value, index) => {
        return <Item key={index}
          title={value}
          excerpt="Team Member"
          src="https://source.unsplash.com/random"
          blue="true"
        />
      })}

    </People>
  </PageContainer>
)

export default TeamPage