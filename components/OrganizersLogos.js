import styled from 'styled-components'

import rem from 'utils/rem'
import { X } from 'components/Icons'

const OrganizersLogos = () => (
  <Wrapper>
    <FlexWrapper>
      <LogoImage src="/static/honeypot.svg" alt="Honeypot" />
      <XWrapper><X /></XWrapper>
      <LogoImage src="/static/graphcool.svg" alt="Graphcool" />
    </FlexWrapper>
  </Wrapper>
)

export default OrganizersLogos

const Wrapper = styled.div`
  display: inline-block;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

const XWrapper = styled.div`
  margin: 0 ${rem(30)};
`

const LogoImage = styled.img`
  display: inline-block;
  height: ${rem(50)};
`
