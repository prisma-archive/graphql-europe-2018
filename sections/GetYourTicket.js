import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile } from 'utils/media'
import { eventbriteLink } from 'utils/config'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSeparator from 'components/SectionSeparator'
import Ticket from 'components/Ticket'
import { InvisibleAnchor } from 'components/Anchor'

const GetYourTicket = () => [
  <InvisibleAnchor key="1" id="get-your-ticket-padded" />,

  <Wrapper key="2" id="get-your-ticket">
    <Container>
      <SectionContent>

        <Headings>
          <SectionTitle>Get your ticket!</SectionTitle>
          <Subtitle>
            You don't want to miss out, join us for GraphQL Europe!
          </Subtitle>
        </Headings>

        <TicketsRow>
          <TicketWrapper>
            <Ticket
              price="199€"
              name="Early Bird"
              desc="Secure your spot now! Time is limited."
              href={eventbriteLink}
            />
          </TicketWrapper>
          <TicketWrapper>
            <Ticket
              disabled={true}
              price="299€"
              name="Regular"
              desc="Regular ticket price for the conferance"
            />
          </TicketWrapper>
          <TicketWrapper>
            <Ticket
              disabled={true}
              price="399€"
              name="Late Bird"
              desc="Last chance to get tickets"
            />
          </TicketWrapper>
        </TicketsRow>

      </SectionContent>
    </Container>
  </Wrapper>
]

export default GetYourTicket

const Wrapper = styled.section``

const Headings = styled.div`
  text-align: center;
`

const Subtitle = styled.p`
  margin: ${rem(-7)} 0 0 0;
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)}
`

const TicketsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: ${rem(55)};

  ${mobile(css`
    margin-top: ${rem(35)};
  `)}
`

const TicketWrapper = styled.div`
  flex: 1;
  margin-right: ${rem(30)};

  &:last-child {
    margin-right: 0;
  }

  ${mobile(css`
    flex: 1 1 auto;
    width: 100%;
    margin-right: 0;
    margin-bottom: ${rem(25)};

    &:last-child {
      margin-bottom: 0;
    }
  `)}
`
