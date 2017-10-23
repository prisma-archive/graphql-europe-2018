import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import Newsletter from 'components/Newsletter'

const Highlights = () => (
  <Wrapper>
    <Container>
      <Newsletter />
    </Container>
  </Wrapper>
)

export default Highlights

const Wrapper = styled.footer`
  position: relative;
  overflow: hidden;
  border-top: 1px solid #f1f1f1;
`
