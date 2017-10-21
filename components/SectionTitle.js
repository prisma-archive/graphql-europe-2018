import styled from 'styled-components'

import { specialRed } from 'utils/colors'
import rem from 'utils/rem'

const SectionTitle = styled.h1`
  margin-bottom: ${rem(16)};

  line-height: ${rem(19)};
  font-size: ${rem(16)};
  font-weight: 600;
  text-transform: uppercase;
  color: ${specialRed};
`

export default SectionTitle
