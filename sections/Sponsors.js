import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'

const Sponsors = () => (
  <Wrapper>
    <Container>
      <SectionContent>
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const GridItem = styled.div`
  flex: 1 0 auto;
  height: ${p => (p.small ? rem(120) : rem(170))};
  line-height: ${p => (p.small ? rem(120) : rem(170))};

  vertical-align: middle;
  text-align: center;

  ${desktop(css`
    width: ${p => (p.small ? `19%` : `24%`)};
  `)};

  ${mobile(css`
    width: 50%;
    height: ${rem(120)};
    line-height: ${rem(120)};
  `)};
`

const LogoImage = styled.img`
  max-width: 90%;
  display: inline-block;
  vertical-align: middle;
  transform: scale(${p => (p.small ? 0.7 : 1)});

  ${mobile(css`
    transform: scale(${p => (p.small ? 0.6 : 0.8)});
  `)};

  max-width: ${rem(170)};
`
