import styled from 'styled-components'

import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'
import { Grid, GridItem, LogoImage } from '../components/LogoGrid'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent style={{ paddingBottom: 10 }}>
        <SectionTitle>Sponsered by</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://rangle.io">
              <LogoImage src="/static/logos/rangleio.svg" alt="Rangle.io" />
            </a>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem small>
            <a href="https://www.okgrow.com/">
              <LogoImage small src="/static/logos/okgrow.svg" alt="OK Grow!" />
            </a>
          </GridItem>
        </Grid>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default Sponsors

const Wrapper = styled.section`
  text-align: center;
`
