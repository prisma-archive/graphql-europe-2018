import { Fragment } from 'react'
import { Twitter, Medium, Mail } from 'components/Icons'
import Footer from 'components/Footer'
import Link from 'next/link'

import { eventbriteLink } from '../utils/config'

export default () => (
  <Footer
    renderLinks={({
      Column,
      LinkItem,
      AnchorLinkItem,
      IconWrapper,
      isHomePage,
    }) => (
      <Fragment>
        <Column>
          <Link href={eventbriteLink}>
            <LinkItem href={eventbriteLink}>Get Tickets</LinkItem>
          </Link>

          {isHomePage() ? (
            <Fragment>
              <AnchorLinkItem to="#speakers-padded">Speakers</AnchorLinkItem>
              <AnchorLinkItem to="#want-to-sponsor-padded">
                Sponsors
              </AnchorLinkItem>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/#speakers">
                <LinkItem href="/#speakers">Speakers</LinkItem>
              </Link>
              <Link href="/#want-to-sponsor">
                <LinkItem href="/#want-to-sponsor">Sponsors</LinkItem>
              </Link>
            </Fragment>
          )}
          <Link href="/team">
            <LinkItem href="/team">Team</LinkItem>
          </Link>
        </Column>

        <Column>
          <LinkItem href="https://api.graphql-europe.org">API</LinkItem>
          <LinkItem href="/code-of-conduct">Code of Conduct</LinkItem>
          <LinkItem href="/imprint">Imprint</LinkItem>
          <LinkItem href="https://github.com/graphcool/graphql-europe-2018">
            <span>View source</span>
          </LinkItem>
        </Column>

        <Column>
          <LinkItem href="https://twitter.com/graphqleu">
            <IconWrapper>
              <Twitter />
            </IconWrapper>
            <span>Twitter</span>
          </LinkItem>
          <LinkItem href="https://medium.com/graphql-europe">
            <IconWrapper medium>
              <Medium />
            </IconWrapper>
            <span>Medium</span>
          </LinkItem>
          <LinkItem href="mailto:support@graphql-europe.org">
            <IconWrapper>
              <Mail />
            </IconWrapper>
            <span>Contact us!</span>
          </LinkItem>
        </Column>
      </Fragment>
    )}
  />
)
