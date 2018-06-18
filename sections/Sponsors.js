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
        <br />
        <br />
        <Grid>
          <GridItem height="60px">
            <a href="https://rangle.io">
              <LogoImage src="/static/logos/rangleio.svg" alt="Rangle.io" />
            </a>
          </GridItem>
          <GridItem height="70px">
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
          <GridItem>
            <a href="https://contentful.com/">
              <LogoImage src="/static/logos/contentful.png" alt="Contentful" />
            </a>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem small height="60px">
            <a href="https://www.okgrow.com/">
              <LogoImage small src="/static/logos/okgrow.svg" alt="OK Grow!" />
            </a>
          </GridItem>

          <GridItem small height="45px">
            <a href="https://aeb.com/">
              <LogoImage small src="/static/logos/aeb.png" alt="AEB" />
            </a>
          </GridItem>

          <GridItem height="50px" style={{ marginBottom: 50 }}>
            <a href="https://www.shopify.com/">
              <LogoImage src="/static/logos/shopify.svg" alt="shopify" />
            </a>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem small height="35px">
            <a href="https://twitter.com/YLDio">
              <LogoImage small src="/static/logos/yld_logo.png" alt="YLD.io" />
            </a>
          </GridItem>
          <GridItem small height="39px">
            <a href="https://twitter.com/">
              <LogoImage small src="/static/logos/twitter.png" alt="Twitter" />
            </a>
          </GridItem>
          <GridItem small height="31px">
            <a href="https://facebook.com/">
              <LogoImage
                small
                src="/static/logos/facebook.png"
                alt="Facebook"
              />
            </a>
          </GridItem>
          <GridItem small height="31px">
            <a href="https://www.apollographql.com">
              <LogoImage small src="/static/logos/apollo.png" alt="apollo" />
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
