import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { specialRed, textLightGrey } from 'utils/colors'

import Footer from '../sections/Footer'
import Navbar from 'components/Navbar'
import PageTitle from 'components/PageTitle'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'

export default () => (
  <div>
    <Navbar notSticky={true} />

    <section>
      <Container>
        <SectionContent>
          <PageTitle>Imprint</PageTitle>

          <Body>
            <Column>
              <ColumnName>Honeypot GmbH</ColumnName>
              <ColumnBlock>
                Schönhauser Allee 45<br />
                10435 Berlin
              </ColumnBlock>
              <ColumnBlock>
                Amtsgericht Charlottenburg<br />
                HRB 167394 B
              </ColumnBlock>
              <ColumnBlock>
                Managing Directors:<br />
                Kaya Taner and Emma Tracey
              </ColumnBlock>
            </Column>

            <Column>
              <ColumnName>Asquera Event UG</ColumnName>
              <ColumnBlock>
                Ohlauer Straße 43<br />
                10999 Berlin
              </ColumnBlock>
            </Column>
          </Body>
        </SectionContent>
      </Container>
    </section>

    <Footer />
  </div>
)

const Desc = styled.p`
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`

const Body = styled.div`
  margin-top: ${rem(30)};
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div`
  min-width: ${rem(350)};
  margin-right: ${rem(30)};

  ${mobile(css`
    margin-right: 0;
    margin-bottom: ${rem(25)};

    &:last-child {
      margin-bottom: 0;
    }
  `)};
`

const ColumnName = styled.div`
  line-height: ${rem(42)};
  font-size: ${rem(25)};
  margin-bottom: ${rem(5)};
`

const ColumnBlock = styled.p`
  line-height: 1.5;
  font-size: ${rem(18)};
  color: ${textLightGrey};

  margin-top: 0;
  margin-bottom: ${rem(30)};

  &:last-child {
    margin-bottom: 0;
  }
`
