import styled, { css } from 'styled-components'
import retinaImage from 'polished/lib/mixins/retinaImage'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { bgLightGrey } from 'utils/colors'
import { opportunityTicketsLink } from '../utils/config'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import Button from 'components/Button'

const OpportunityTickets = () => (
  <Wrapper id="opportunity">
    <Container>
      <SectionContent>
        <FlexWrapper>
          <ImageWrapper>
            <img src="/static/photos/cpa.png" />
          </ImageWrapper>

          <Texts>
            <SectionTitle spacing="medium">
              Node.JS & Prisma Workshop
            </SectionTitle>

            <Desc>
              Thursday evening before the conference, there will be a practical
              workshop exclusively for GraphQL Europe attendees. It teaches how
              to build GraphQL servers using a modern stack based on Node.JS,
              Prisma and GraphQL bindings.
            </Desc>

            <ButtonWrapper>
              <Button
                isLink={true}
                href="https://www.meetup.com/graphql-berlin/events/251440436/"
              >
                Register
              </Button>
            </ButtonWrapper>
          </Texts>
        </FlexWrapper>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default OpportunityTickets

const Wrapper = styled.section`
  position: relative;
  background: ${bgLightGrey};

  ${mobile(css`
    margin-left: 0;
  `)};
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`

const Texts = styled.div`
  width: ${rem(441)};
  padding: ${rem(16)} 0;
  margin-left: ${rem(86)};

  ${mobile(css`
    width: 100%;
    margin-left: 0;
    padding: ${rem(45)} 0 0 0;
  `)};
`

const ImageWrapper = styled.div`
  ${retinaImage(
    '/static/photos/cpa',
    'cover',
    'png',
    undefined,
    '@2x',
  )} flex: 1 1 auto;
  background-size: cover;
  text-indent: -99999px;

  img {
    height: 1px;
    width: 1px;
    display: none;
  }

  ${mobile(css`
    width: 100%;
    height: ${rem(250)};
  `)};
`

const Desc = styled.p`
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: ${rem(35)};
`
