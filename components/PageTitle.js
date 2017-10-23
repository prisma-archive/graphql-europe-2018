import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { textDarkGrey } from 'utils/colors'

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: ${rem(30)};
  font-weight: 800;
  font-size: ${rem(45)};
  color: ${textDarkGrey};

  ${mobile(css`
    font-size: ${rem(30)};
  `)}
`

export default PageTitle
