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

  top: ${rem(-70)};

  ${mobile(css`
     top: ${rem(0)};
  `)}
`
