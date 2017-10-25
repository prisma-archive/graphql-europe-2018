import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import lighten from 'polished/lib/color/lighten'
import ClickOutHandler from 'react-onclickout'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { bgLightGrey, specialRed } from 'utils/colors'
import { resetButton } from 'utils/reset'
import NavItem from './NavItem'
import { MenuIcon } from 'components/Icons'

// Width and height of mobile icon button
// (menu trigger on mobile)
const mobileIconSize = 45

class NavbarLinks extends Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isOpen } = this.state

    return [
      // Links layout visible on desktop and hidden on mobile
      <DesktopLinks key="1">
        <Links />
      </DesktopLinks>,

      // Links layout for mobiles and hidden on desktop
      <ClickOutHandler key="2" onClickOut={this.closeNavbar}>
        <MobileLinks>
          <IconWrapper
            active={isOpen}
            onClick={this.toggleNavbar}
          >
            <MenuIcon />
          </IconWrapper>

          {isOpen &&
            <MobileLinksBox>
              <Links />
            </MobileLinksBox>
          }
        </MobileLinks>
      </ClickOutHandler>,
    ]
  }

  closeNavbar = () => {
    this.setState({
      isOpen: false
    })
  }

  toggleNavbar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
}

export default NavbarLinks

const Links = () => [
  <NavItem key="1" href="https://2017.graphql-europe.org/">2017</NavItem>,
  <NavItem key="3" href="#call-for-papers" isAnchor={true}>Speak</NavItem>,
  <NavItem key="4" href="#want-to-sponsor" isAnchor={true}>Sponsor</NavItem>,
  <NavItem key="5" href="/team">Team</NavItem>,
  <NavItem key="6" href="#get-your-ticket" isButtonStyle={true} isAnchor={true}>Get Tickets</NavItem>,
]

const DesktopLinks = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${mobile(css`
    display: none;
  `)}
`

const MobileLinks = styled.div`
  display: none;
  position: relative;
  height: 100%;

  ${mobile(css`
    display: flex;
    align-items: center;
  `)}
`

const IconWrapper = styled.button`
  ${resetButton}

  width: ${rem(mobileIconSize)};
  height: ${rem(mobileIconSize)};
  border-radius: ${rem(5)};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
  }

  &:hover,
  &:focus {
    background: ${bgLightGrey};
  }

  &:focus {
    box-shadow: inset 0 0 0 3px ${lighten(0.3, specialRed)};
  }

  ${p => p.active ? css`
    background: ${specialRed};

    path {
      fill: #f2f2f2;
    }

    &:hover,
    &:focus {
      background: ${specialRed};
    }
  ` : ''}
`

const MobileLinksBox = styled.div`
  position: absolute;
  top: ${rem(69)};
  box-sizing: border-box;
  right: 0;

  padding: ${rem(16)};
  text-align: center;
  background: white;
  box-shadow: 0 ${rem(5)} ${rem(16)} rgba(0, 0, 0, 0.1);
`
