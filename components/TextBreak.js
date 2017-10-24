import styled, { css } from 'styled-components'

import { mobile, desktop } from 'utils/media'

export const MobileTextBreak = styled.span`
  ${mobile(css`
    display: ${p => p.soft ? 'inline-block' : 'block'};;
  `)}
`

export const DesktopTextBreak = styled.span`
  ${desktop(css`
    display: ${p => p.soft ? 'inline-block' : 'block'};;
  `)}
`
