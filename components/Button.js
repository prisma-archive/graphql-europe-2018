import styled from 'styled-components'
import darken from 'polished/lib/color/darken'
import lighten from 'polished/lib/color/lighten'
import Link from 'next/link'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { resetButton } from 'utils/reset'

const height = 45

const BaseButton = styled.button`
  ${resetButton}

  display: inline-block;
  height: ${rem(height)};
  line-height: ${rem(height)};
  padding: 0 ${rem(45)};

  font-size: ${rem(18)};
  border-radius: ${rem(5)};
  background: ${specialRed};
  color: white;
  cursor: pointer;
  transition:
    background 100ms ease-out,
    transform 100ms ease-out;

  &:hover,
  &:focus {
    background: ${darken(0.15, specialRed)};
  }

  &:focus {
    box-shadow: inset 0 0 0 2px ${lighten(0.2, specialRed)};
  }

  &:active {
    transform: scale(0.95);
  }
`

const LinkButton = BaseButton.withComponent('a')

const Button = ({ isLink = false, href, ...props }) => {
  if (isLink) {
    return (
      <Link href={href}>
        <LinkButton href={href} {...props} />
      </Link>
    )
  }

  return <BaseButton {...props} />
}

export default Button
