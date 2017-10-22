import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mediumSectionSpace, largeSectionSpace } from 'utils/sizes'
import { mobile } from 'utils/media'

const SectionContent = styled.div`
  padding-top: ${rem(largeSectionSpace)};
  padding-bottom: ${rem(largeSectionSpace)};

  ${mobile(css`
    padding-top: ${rem(mediumSectionSpace)};
    padding-bottom: ${rem(mediumSectionSpace)};
  `)}
`

export default SectionContent
