import styled from 'styled-components'

import rem from 'utils/rem'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import OrganizersLogos from 'components/OrganizersLogos'

const CoOrganizedBy = () => (
  <Wrapper>
    <Container>
      <SectionContent noPaddingTop>
        <SectionTitle spacing="medium">Co-Organized by</SectionTitle>
        <OrganizersLogos />
      </SectionContent>
    </Container>
  </Wrapper>
)

export default CoOrganizedBy

const Wrapper = styled.section`
  text-align: center;
`
