import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed, textLightGrey } from 'utils/colors'
import { mediumSectionSpace, largeSectionSpace } from 'utils/sizes'
import { mobile } from 'utils/media'
import { Box, Human, Prize } from 'components/Icons'

const FactsRow = () => (
  <Wrapper>
    <Fact
      value="100%"
      desc="Would attend again"
      renderIcon={() => <Prize />}
    />
    <Fact
      value="55%"
      desc="of attendees were using GraphQL in production"
      renderIcon={() => <Box />}
    />
    <Fact
      value="270"
      desc="Attendees"
      renderIcon={() => <Human />}
    />
  </Wrapper>
)

export default FactsRow

const Fact = ({ renderIcon, value, desc }) => (
  <FactWrapper>
    <FactIconWrapper>{renderIcon()}</FactIconWrapper>
    <FactValue>{value}</FactValue>
    <FactDesc>{desc}</FactDesc>
  </FactWrapper>
)

const FactWrapper = styled.div`
  flex: 1;
  text-align: center;

  ${mobile(css`
    flex: 1 1 100%;
    margin-bottom: ${rem(45)};

    &:last-child {
      margin-bottom: 0;
    }
  `)}
`

const FactIconWrapper = styled.div`
  margin-bottom: ${rem(5)};
`

const FactValue = styled.div`
  line-height: ${rem(54)};
  font-size: ${rem(45)};
  font-weight: 800;
  color: ${specialRed};
`

const FactDesc = styled.div`
  max-width: ${rem(200)};
  margin: 0 auto;
  line-height: 1.5;
  color: ${textLightGrey};
`

const Wrapper = styled.section`
  padding-top: ${rem(largeSectionSpace)};
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;

  ${mobile(css`
    padding-top: ${rem(mediumSectionSpace)};
  `)}
`
