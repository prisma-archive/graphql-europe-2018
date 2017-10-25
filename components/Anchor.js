import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'

export const InvisibleAnchor = styled.div.attrs({
  'aria-hidden': true
})`
  position: relative;
  display: block;
  visibility: hidden;
  height: 0;

  top: ${rem(0)};
  /* if we wanted sticky navbar */

  ${mobile(css`
     top: ${rem(0)};
  `)}
`
