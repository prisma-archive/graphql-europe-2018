import styled, { css } from 'styled-components'
import Link from 'next/link'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { navHeight, mobileNavHeight } from 'utils/sizes'
import Container from 'components/Container'
import Logo from 'components/Logo'
import NavbarLinks from './NavbarLinks'
import Sticky from './Sticky'

const logoHeight = 35
const mobileLogoHeight = 50

const Navbar = ({ alwaysSticky = false, notSticky = false }) => (
  <Sticky alwaysSticky={alwaysSticky} notSticky={notSticky}>
    {({ shouldStick, isVisible, isTransitioning }) => ([
      <Placeholder key="1" />,

      <Wrapper
        key="2"
        shouldStick={shouldStick}
        isVisible={isVisible}
        isTransitioning={isTransitioning}
      >
        <Container>
          <FlexWrapper>

            <Start>
              <Link href="/">
                <LogoAndTitle href="/">
                  <LogoWrapper><Logo /></LogoWrapper>
                  <Title>GraphQL Europe</Title>
                </LogoAndTitle>
              </Link>
            </Start>

            <End>
              <NavbarLinks />
            </End>

          </FlexWrapper>
        </Container>
      </Wrapper>
    ])}
  </Sticky>
)

export default Navbar

const Wrapper = styled.div`
  width: 100%;
  height: ${rem(navHeight)};
  background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%);
  opacity: 1;
  transition: opacity 150ms ease-in-out;

  position: absolute;
  top: 0;
  z-index: 9;
  transform: translateY(0);

  ${mobile(css`
    height: ${rem(mobileNavHeight)};
  `)}

  ${p => !p.isVisible && css`
    background: white;
    opacity: 0;

    position: fixed;
    visibility: hidden;
    transform: translateY(-100%);
  `}

  ${p => p.isTransitioning && css`
    transition: all 100ms ease-in-out;
  `}

  ${p => p.shouldStick && css`
    position: fixed;
    transform: translateY(0);
    visibility: visible;
    opacity: 1;

    box-shadow: 0 ${rem(3)} ${rem(10)} rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid #f1f1f1;
  `}
`

const Placeholder = styled.div`
  width: 100%;
  height: ${rem(navHeight)};
`

const FlexWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Start = styled.div`
  height: ${rem(navHeight)};

  ${mobile(css`
    height: ${rem(mobileNavHeight)};
  `)}
`

const End = styled.div`
  height: ${rem(navHeight)};

  ${mobile(css`
    height: ${rem(mobileNavHeight)};
  `)}
`

const LogoAndTitle = styled.a`
  height: 100%;
  display: flex;
  align-items: center;

  text-decoration: none;
  color: black;
  text-shadow: 0 0 0 transparent;
  transition: text-shadow 150ms ease-out;

  &:hover {
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
    color: black;

    ${LogoWrapper} img {
      transform: rotate(240deg);
    }
  }
`

const LogoWrapper = styled.span`
  display: inline-block;

  img {
    height: ${rem(logoHeight)};
    transition: transform 300ms ease-out;

    ${mobile(css`
      height: ${rem(mobileLogoHeight)};
    `)}
  }
`

const Title = styled.h3`
  display: inline-block;
  margin-left: ${rem(10)};
  font-size: ${rem(20)};
  font-weight: 600;

  ${mobile(css`
    display: none;
  `)}
`
