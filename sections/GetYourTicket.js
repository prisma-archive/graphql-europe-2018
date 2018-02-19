import styled from 'styled-components'

import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSubtitleDesc from 'components/SectionSubtitleDesc'
import Ticket from 'components/Ticket'
import { InvisibleAnchor } from 'components/Anchor'
import TicketsRow from 'components/TicketsRow'

const GetYourTicket = ({ eventbriteLink }) => [
  <InvisibleAnchor key="1" id="get-your-ticket-padded" />,

  <Wrapper key="2" id="get-your-ticket">
    <Container>
      <SectionContent>
        <Headings>
          <SectionTitle>Get your ticket!</SectionTitle>
          <SectionSubtitleDesc>
            You don't want to miss out, join us for GraphQL Europe!
          </SectionSubtitleDesc>
        </Headings>

        <TicketsRow.Row>
          <TicketsRow.Item>
            <Ticket
              disabled={true}
              price="199€"
              name="Early Bird"
              desc="Sold out!"
            />
          </TicketsRow.Item>
          <TicketsRow.Item>
            <Ticket
              disabled={false}
              price="299€"
              name="Regular"
              desc="Regular ticket price for the conference"
              href={eventbriteLink}
            />
          </TicketsRow.Item>
          <TicketsRow.Item>
            <Ticket
              disabled={true}
              price="399€"
              name="Late Bird"
              desc="Last chance to get tickets"
            />
          </TicketsRow.Item>
        </TicketsRow.Row>
      </SectionContent>
    </Container>
  </Wrapper>,
]

export default GetYourTicket

const Wrapper = styled.section``

const Headings = styled.div`
  text-align: center;
`
