import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import Newsletter from 'components/Newsletter'

const Footer = () => (
  <Wrapper>
    <Container>
      <Newsletter />
    </Container>

    <LowerFooter>
      <Container>
        Footer placeholder until we finilized the design.
      </Container>
    </LowerFooter>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
  border-top: 1px solid #f1f1f1;
`

const LowerFooter = styled.div`
  border-top: 1px solid #f1f1f1;
  padding: ${rem(40)} 0;
  color: #bbb;
`
