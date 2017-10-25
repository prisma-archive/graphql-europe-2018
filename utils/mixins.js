import { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'

export const boxStyle = (border = false, background = false) => css`
  border-radius: ${rem(5)};
  box-shadow: ${rem(8)} ${rem(8)} ${rem(22)} rgba(0, 0, 0, 0.14);

  ${border && css`border: 1px solid #e2e8f0;`}
  ${background && css`background: white;`}
`

export const upperCaseHeading = css`
  line-height: ${rem(19)};
  font-weight: 600;
  font-size: ${rem(16)};
  text-transform: uppercase;
  letter-spacing: ${rem(0.5)};
  color: ${specialRed};
`
