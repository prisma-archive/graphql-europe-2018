import styled, { css } from 'styled-components'
import Link from 'next/link'
import darken from 'polished/lib/color/darken'

import rem from 'utils/rem'
import { almostBlack, specialRed } from 'utils/colors'

const height = 40

const NavItem = ({ children, isButtonStyle = false, href, ...props }) => {
  let Item = LinkItem
  if (isButtonStyle) {
    Item = ButtonItem
  }

  return (
    <Link href={href}>
      <Wrapper {...props}>
        <Item
          isButtonStyle={isButtonStyle}
          href={href}
          children={children}
        />
      </Wrapper>
    </Link>
  )
}

export default NavItem

const Wrapper = styled.div`
  height: ${rem(40)};
  line-height: ${rem(40)};
  margin-right: ${rem(20)};

  &:last-child {
    margin-right: 0;
  }
`

const BaseItem = styled.a`
  display: inline-block;
  text-decoration: none;
`

const LinkItem = BaseItem.extend`
  position: relative;
  line-height: 1.2;
  padding: ${rem(10)};
  color: ${almostBlack};
  transition:
    opacity 100ms ease-out,
    transform 100ms ease-out;

  &:after {
    content: '';
    position: absolute;
    bottom: ${rem(10)};
    left: 50%;
    height: 1px;
    width: 0;
    transform: translateX(-50%);
    background: black;
    transition: width 100ms ease-out;
  }

  &:hover,
  &:focus {
    color: ${almostBlack};

    &:after {
      width: calc(100% - ${rem(20)});
    }
  }

  &:active {
    opacity: 0.5;
    transform: scale(0.95);
  }
`

const ButtonItem = BaseItem.extend`
  height: ${rem(40)};
  line-height: ${rem(40)};
  padding: 0 ${rem(20)};
  border-radius: ${rem(22.5)};
  background: ${specialRed};
  color: white;
  transition:
    background 100ms ease-out,
    color 100ms ease-out,
    transform 100ms ease-out;

  &:hover,
  &:focus {
    background: ${darken(0.15, specialRed)};
    color: ${darken(0.07, 'white')};
  }

  &:active {
    transform: scale(0.95);
  }
`
