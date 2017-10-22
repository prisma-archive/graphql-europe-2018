import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
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

  ${mobile(css`
    margin: 0 ${rem(15)};

    svg {
      width: ${rem(30)};
      height: auto;
    }
  `)}
`

const LogoImage = styled.img`
  display: inline-block;
  height: ${rem(50)};

  ${mobile(css`
    height: ${rem(30)};
  `)}
`
