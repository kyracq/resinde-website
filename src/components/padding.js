import tw, { styled } from "twin.macro"

export const PaddingLeft = styled.div`
  ${tw`mobile:pl-8 lg:pl-8 xl:pl-24 pl-48`}
`
export const PaddingRight = styled.div`
  ${tw`mobile:pr-8 lg:pr-8 xl:pr-24 pr-48`}
`
export const Padding = styled.div`
  ${tw`mobile:px-8 lg:px-32 xl:px-48 px-48`}
`
export const SectionTextLeft = styled(PaddingLeft)`
  ${tw`self-center flex-grow grid justify-items-center space-y-8 mr-8`}
`
export const SectionTextRight = styled(PaddingRight)`
  ${tw`self-center flex-grow grid justify-items-center space-y-8 ml-8`}
`
