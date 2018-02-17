import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent>
        <Grid>
          <GridItem>
            <LogoImage src="/static/logos/commercetools.png" alt="Apollo" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/neo4j.png" alt="Neo4j" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/zalando.png" alt="Zalando" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/github.png" alt="Github" />
          </GridItem>

          <GridItem>
            <LogoImage src="/static/logos/n26.png" alt="N26" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/intuit.png" alt="intuit" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/facebook.png" alt="Facebook" />
          </GridItem>
          <GridItem>
            <LogoImage src="/static/logos/apollo.png" alt="Apollo" />
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justifty-content: flex-start;
`

const GridItem = styled.div`
  flex: 1 0 auto;
  height: ${rem(170)};
  line-height: ${rem(170)};

  vertical-align: middle;
  text-align: center;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;

  ${desktop(css`
    width: 24%;

    &:nth-child(4n) {
      border-right: 0;
    }

    &:nth-last-child(-n + 4) {
      border-bottom: 0;
    }
  `)} ${mobile(css`
      width: 50%;
      height: ${rem(120)};
      line-height: ${rem(120)};

      &:nth-child(2n) {
        border-right: 0;
      }

      &:nth-last-child(-n + 2) {
        border-bottom: 0;
      }
    `)};
`

const LogoImage = styled.img`
  max-width: 90%;
  display: inline-block;
  vertical-align: middle;

  ${mobile(css`
    transform: scale(0.8);
  `)};
`
