import styled from 'styled-components'

import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import SectionTitle from 'components/SectionTitle'
import { Grid, GridItem, LogoImage } from '../components/LogoGrid'

const Partners = () => (
  <Wrapper>
    <Container>
      <SectionContent style={{ paddingBottom: 80 }}>
        <SectionTitle>Our Partners</SectionTitle>
        <Grid>
          <GridItem>
            <a href="https://react.amsterdam">
              <LogoImage
                src="/static/logos/react-amsterdam.svg"
                alt="React Amsterdam"
              />
            </a>
          </GridItem>
        </Grid>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default Partners

const Wrapper = styled.section`
  text-align: center;
`
