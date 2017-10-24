import { css } from 'styled-components'

import rem from 'utils/rem'

export const mobileMediaString = `(max-width: ${rem(800)})`

export const mobile = body => css`
  @media (max-width: ${rem(800)}) {
    ${body}
  }
`

export const desktop = body => css`
  @media (min-width: ${rem(801)}) {
    ${body}
  }
`
