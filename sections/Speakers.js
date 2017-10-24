import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import Grid from 'components/Grid'

const speakersList = [
  {
    
  }
]

const Speakers = () => (
  <Wrapper>
    <Container>
      <SectionContent>
        <SectionTitle spacing="large">
          Speakers 2018 - placeholder -
        </SectionTitle>

        <Grid>
          {GridItem => [].map((v, i) => (
            <GridItem key={i}>
              <VideoHighlight {...v} />
            </GridItem>
          ))}
        </Grid>

      </SectionContent>
    </Container>
  </Wrapper>
)

export default Speakers

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`
