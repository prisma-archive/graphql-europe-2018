import styled, { css } from 'styled-components'
import Link from 'next/link'
import Scrollchor from 'react-scrollchor'

import rem from 'utils/rem'
import { specialRed, textDarkGrey, textGrey } from 'utils/colors'
import { mobile, desktop } from 'utils/media'
import { eventbriteLink } from 'utils/config'
import Container from 'components/Container'
import Newsletter from 'components/Newsletter'
import OrganizersLogos from 'components/OrganizersLogos'
import Logo from 'components/Logo'
import { Twitter, Github, Medium, Mail } from 'components/Icons'

const Footer = () => (
  <Wrapper>
    <Container>
      <Newsletter />
    </Container>

    <LowerFooter>
      <Container>

        <FlexWrapper>
          <Start>

            <LogoWrapper>
              <Logo />
              <LogoTitle>GraphQL-Europe</LogoTitle>
            </LogoWrapper>

            <Column>
              <Links />
            </Column>

            <Column>
              <LinkItem href="/#">API</LinkItem>
              <LinkItem href="/code-of-conduct">Code of Conduct</LinkItem>
              <LinkItem href="/imprint">Imprint</LinkItem>
              <LinkItem href="https://github.com/graphcool/graphql-europe-2018">
                <span>View source</span>
              </LinkItem>
            </Column>

            <Column>
              <LinkItem href="https://twitter.com/graphqleu">
                <IconWrapper><Twitter /></IconWrapper>
                <span>Twitter</span>
              </LinkItem>
              <LinkItem href="https://medium.com/graphql-europe">
                <IconWrapper medium><Medium /></IconWrapper>
                <span>Medium</span>
              </LinkItem>
              <LinkItem href="mailto:support@graphql-europe.org">
                <IconWrapper><Mail /></IconWrapper>
                <span>Contact us!</span>
              </LinkItem>
            </Column>

          </Start>
          <End>
            <OrganizersLogos compact={true} />
          </End>
        </FlexWrapper>

      </Container>
    </LowerFooter>
  </Wrapper>
)

export default Footer

const AnchorLinks = () => [
  <Link href={eventbriteLink}><LinkItem href={eventbriteLink}>Get Tickets</LinkItem></Link>,
  <AnchorLinkItem to="#speakers-padded">Speakers</AnchorLinkItem>,
  <AnchorLinkItem to="#want-to-sponsor-padded">Sponsors</AnchorLinkItem>,
  <Link href="/team"><LinkItem href="/team">Team</LinkItem></Link>,
]

const NormalLinks = () => [
  <Link href={eventbriteLink}><LinkItem href={eventbriteLink}>Get Tickets</LinkItem></Link>,
  <Link href="/#speakers"><LinkItem href="/#speakers">Speakers</LinkItem></Link>,
  <Link href="/#want-to-sponsor"><LinkItem href="/#want-to-sponsor">Sponsors</LinkItem></Link>,
  <Link href="/team"><LinkItem href="/team">Team</LinkItem></Link>,
]

const Links = () => {
  if (!process.browser) {
    return <NormalLinks />
  }

  if (window.location.pathname === '/') {
    return <AnchorLinks />
  } else {
    return <NormalLinks />
  }

  return null
}

const Wrapper = styled.footer`
  border-top: 1px solid #f1f1f1;
`

const LowerFooter = styled.div`
  padding: ${rem(40)} 0 ${rem(60)} 0;
  border-top: 1px solid #f1f1f1;
  color: #aaacaa;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${mobile(css`
    flex-direction: column;
  `)}
`

const Start = styled.div`
  display: flex;
  align-items: stretch;

  ${mobile(css`
    flex-wrap: wrap;
  `)}
`

const End = styled.div`
  text-align: right;

  ${mobile(css`
    margin-top: ${rem(30)};
  `)}
`

const Column = styled.div`
  padding-right: ${rem(80)};

  ${mobile(css`
    flex: 1 auto;
    width: 33.33%;
    padding-right: 0;
  `)}
`

const LogoWrapper = styled.div`
  padding-right: ${rem(80)};
  display: block;

  img {
    display: inline-block;
    height: ${rem(35)};
    vertical-align: middle;
  }

  ${mobile(css`
    flex: 1 1 100%;
    margin-bottom: ${rem(25)};

    img {
      height: ${rem(40)};
    }
  `)}
`

const LogoTitle = styled.h1`
  display: none;
  margin: 0 0 0 ${rem(10)};
  line-height: 1;
  font-size: ${rem(18)};
  color: ${textDarkGrey};
  vertical-align: middle;

  ${mobile(css`
    display: inline-block;
  `)}
`

const LinkItem = styled.a`
  display: block;
  margin-bottom: ${rem(13)};

  font-size: ${rem(16)};
  vertical-align: middle;
  text-decoration: none;
  line-height: 1.25;
  color: #aaacaa;
  transition: color 100ms;

  &:last-child {
    margin-bottom: 0;
  }

  path {
    fill: #ccc;
    transition: fill 100ms;
  }

  &:hover {
    color: ${textGrey};

    path {
      fill: ${textGrey};
    }
  }

  ${mobile(css`
    margin-bottom: ${rem(15)};
    line-height: 1.5;
  `)}
`

const AnchorLinkItem = LinkItem.withComponent(Scrollchor)

const IconWrapper = styled.span`
  vertical-align: middle;
  padding-right: ${rem(10)};

  svg {
    display: inline-block;
    vertical-align: ${p => p.medium ? '0' : '-2px'};
    width: ${rem(17)};
    height: auto;
  }
`
