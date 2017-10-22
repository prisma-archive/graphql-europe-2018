import styled, { css } from 'styled-components'

import { mobile, desktop } from 'utils/media'

export const MobileTextBreak = styled.span`
  ${mobile(css`
    display: block;
  `)}
`

export const DesktopTextBreak = styled.span`
  ${desktop(css`
    display: block;
  `)}
`
