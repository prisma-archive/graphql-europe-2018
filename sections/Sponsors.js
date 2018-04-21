import styled from 'styled-components'

import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'
import { Grid, GridItem, LogoImage } from 'components/LogoGrid'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent>
        <SectionTitle>Sponsored by</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://rangle.io">
              <LogoImage src="/static/logos/rangleio.svg" alt="Rangle.io" />
            </a>
          </GridItem>
          <GridItem>
            <a href="https://github.com">
              <LogoImage src="/static/logos/github.svg" alt="Github" />
            </a>
          </GridItem>
          <GridItem>
            <a href="http://www.br.de">
              <LogoImage
                src="/static/logos/br-next.png"
                alt="Bayerischer Rundfunk"
              />
            </a>
          </GridItem>
          <GridItem>
            <a href="https://neo4j.com/">
              <LogoImage
                src="/static/logos/neo4j_logo.svg"
                height="90"
                alt="Neo4j"
              />
            </a>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem small>
            <a href="https://www.okgrow.com/">
              <LogoImage small src="/static/logos/okgrow.svg" alt="OK Grow!" />
            </a>
          </GridItem>
          <GridItem small>
            <a href="https://twitter.com/YLDio">
              <LogoImage small src="/static/logos/yld_logo.png" alt="YLD.io" />
            </a>
          </GridItem>
          <GridItem small>
            <a href="https://aeb.com/">
              <LogoImage small src="/static/logos/aeb.png" alt="AEB" />
            </a>
          </GridItem>
          <GridItem small>
            <a href="https://twitter.com/">
              <LogoImage small src="/static/logos/twitter.png" alt="Twitter" />
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
