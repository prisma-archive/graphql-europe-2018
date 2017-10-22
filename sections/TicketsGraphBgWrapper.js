import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import GraphBg from 'components/GraphBg'

const TicketsGraphBgWrapper = ({ children }) => (
  <Wrapper>
    <TopGraphBgWrapper>
      <GraphBg />
    </TopGraphBgWrapper>

    <LowerGraphBgWrapper>
      <GraphBg />
    </LowerGraphBgWrapper>

    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>
)

export default TicketsGraphBgWrapper

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const TopGraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(-100)};
  left: ${rem(-340)};
  transform: rotateZ(-32deg);

  ${mobile(css`
    top: ${rem(-240)};
    left: ${rem(-410)};
    transform: scale(0.7);
  `)}
`

const LowerGraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(40)};
  right: ${rem(-240)};
  transform: rotateZ(-32deg);

  ${mobile(css`
    top: ${rem(140)};
    right: ${rem(-300)};
    transform: scale(0.7);
  `)}
`

const ContentWrapper = styled.div`
  position: relative;
`
