import styled, { css } from 'styled-components'

import { mobile } from 'utils/media'

const MobileTextBreak = styled.span`
  ${mobile(css`
    display: block;
  `)}
`

export default MobileTextBreak
