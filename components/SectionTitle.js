import styled, { css } from 'styled-components'

import { upperCaseHeading } from 'utils/mixins'
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

  ${upperCaseHeading}

  ${mobile(css`
    margin-bottom: ${p => rem(mobileSpacingTypes[ p.spacing || 'normal' ])};
  `)}
`

export default SectionTitle
