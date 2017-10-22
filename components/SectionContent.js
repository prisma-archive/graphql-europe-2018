import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mediumSectionSpace, largeSectionSpace } from 'utils/sizes'
import { mobile } from 'utils/media'

const SectionContent = styled.div`
  padding-top: ${p => p.noPaddingTop ? '' : rem(largeSectionSpace)};
  padding-bottom: ${p => p.noPaddingBottom ? '' : rem(largeSectionSpace)};

  ${mobile(css`
    padding-top: ${p => p.noPaddingTop ? '' : rem(mediumSectionSpace)};
    padding-bottom: ${p => p.noPaddingBottom ? '' : rem(mediumSectionSpace)};
  `)}
`

export default SectionContent
