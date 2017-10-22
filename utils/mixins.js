import { css } from 'styled-components'

import rem from 'utils/rem'

export const boxStyle = (border = false, background = false) => css`
  border-radius: ${rem(5)};
  box-shadow: ${rem(8)} ${rem(8)} ${rem(22)} rgba(0, 0, 0, 0.14);

  ${border && css`border: 1px solid #e2e8f0;`}
  ${background && css`background: white;`}
`
