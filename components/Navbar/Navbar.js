import styled from 'styled-components'
import Link from 'next/link'

import rem from 'utils/rem'
import Container from 'components/Container'
import Logo from 'components/Logo'
import NavItem from './NavItem'

const logoHeight = 35
const navHeight = 69

const Navbar = () => (
  <Wrapper>
    <Container>
      <FlexWrapper>

        <Start>
          <Link to="/">
            <LogoAndTitle href="/">
              <LogoWrapper><Logo /></LogoWrapper>
              <Title>GraphQL-Europe</Title>
            </LogoAndTitle>
          </Link>
        </Start>

        <End>
          <NavItem href="/#">2017</NavItem>
          <NavItem href="/#">Attend</NavItem>
          <NavItem href="/#">Speak</NavItem>
          <NavItem href="/#">Sponsor</NavItem>
          <NavItem href="/#">Team</NavItem>
          <NavItem href="/#" isButtonStyle={true}>Register</NavItem>
        </End>

      </FlexWrapper>
    </Container>
  </Wrapper>
)

export default Navbar

const Wrapper = styled.div`
  width: 100%;
  height: ${rem(navHeight)};
  background: linear-gradient(180deg, white 0%, rgba(255, 255, 255, 0) 100%);
`

const FlexWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Start = styled.div`
  height: 100%;
`

const End = styled.div`
  height: ${rem(navHeight)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const LogoAndTitle = styled.a`
  display: block;
  height: 100%;
  vertical-align: middle;
  text-decoration: none;
  color: black;
  text-shadow: 0 0 0 transparent;
  transition: text-shadow 150ms ease-out;

  &:hover {
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

    ${LogoWrapper} img {
      transform: rotate(240deg);
    }
  }
`

const LogoWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;

  img {
    height: ${rem(logoHeight)};
    transition: transform 300ms ease-out;
  }
`

const Title = styled.h3`
  display: inline-block;
  margin-left: ${rem(10)};
  font-size: ${rem(20)};
  font-weight: 600;
`
