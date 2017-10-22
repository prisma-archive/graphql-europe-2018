import styled, { css } from 'styled-components'

import { specialRed } from 'utils/colors'
import { mobile } from 'utils/media'
import rem from 'utils/rem'

const spacingTypes = {
  'normal': 16,
  'medium': 35,
  'large': 45,
}

const mobileSpacingTypes = {
  'normal': 25,
  'medium': 25,
  'large': 25,
}

const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: ${p => rem(spacingTypes[ p.spacing || 'normal' ])};

  line-height: ${rem(19)};
  font-size: ${rem(16)};
  font-weight: 600;
  text-transform: uppercase;
  color: ${specialRed};

  ${mobile(css`
    margin-bottom: ${p => rem(mobileSpacingTypes[ p.spacing || 'normal' ])};
  `)}
`

export default SectionTitle
