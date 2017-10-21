import styled from 'styled-components'

import { specialRed } from 'utils/colors'
import rem from 'utils/rem'

const spacingTypes = {
  'normal': 16,
  'medium': 35,
  'large': 45,
}

const SectionTitle = styled.h1`
  margin-bottom: ${p => rem(spacingTypes[ p.spacing || 'normal' ])};

  line-height: ${rem(19)};
  font-size: ${rem(16)};
  font-weight: 600;
  text-transform: uppercase;
  color: ${specialRed};
`

export default SectionTitle
