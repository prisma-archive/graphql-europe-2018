import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'

const Speakers = () => (
  <Wrapper>
    <Container>
      <SectionContent>
        <SectionTitle spacing="large">
          Speakers 2018
        </SectionTitle>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default Speakers

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`
