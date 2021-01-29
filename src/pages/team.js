import React from "react"
import tw from "twin.macro"
import person from "../images/headshots/howard.png"

import SEO from "../components/seo"
import Item from "../components/item"

const StyledHeaderDiv = tw.div`
  mt-16
`

const PageContainer = tw.div`
  space-y-14 mobile:px-8 xl:px-14 px-20 
`

const People = tw.div`
  grid grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-x-6
`
let Members = [
  ['Ashley	To \'22', 'Co-Founder', 'imglink'],
  ['Jacqueline Xu \'22', 'Co-Founder', 'imglink'],
  ['Kyra Acquah \'22', 'Director of Development', 'imglink'],
  ['Joanna Kuo \'22', 'Director of Development', 'imglink'],
  ['Manasseh Alexander \'21', 'Director of Design', 'imglink'],
  ['Thanya Begum \'23', 'Outreach/Marketing Officer', 'imglink'],
  ['Iroha Shirai \'23', 'Outreach/Marketing Officer', 'imglink'],
  ['Begum Ortaoglu \'22', 'Team Member', 'imglink'],
  ['Megan Specht \'23', 'Team Member', 'imglink'],
  ['Sophie Torres \'21', 'Team Member', 'imglink'],
  ['Ameya Vaidya \'24', 'Team Member', 'imglink'],
  ['Howard Yen \'23', 'Team Member', 'imglink']
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
      {Members.map((member, index) => {
        return <Item key={index}
          title={member[0]}
          excerpt={member[1]}
          src={person}
          blue="true"
        />
      })}

    </People>
  </PageContainer>
)

export default TeamPage