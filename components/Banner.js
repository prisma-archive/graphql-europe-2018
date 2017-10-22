import styled from 'styled-components'

import rem from 'utils/rem'
import { bgLightGrey } from 'utils/colors'

const Banner = ({ children, ...props }) => (
  <Wrapper {...props}>
    <Bg>
      {children}
    </Bg>
  </Wrapper>
)

export default Banner

const Wrapper = styled.div`
  width: ${rem(130)};
  height: ${rem(130)};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Bg = styled.div`
  flex: 1 0 auto;
  width: 142%;
  margin-top: ${rem(-20)};
  margin-left: ${rem(-20)};
  height: ${rem(27)};
  line-height: ${rem(27)};
  transform: rotate(315deg);
  transform-origin: 50% 50%;

  font-size: ${rem(16)};
  text-transform: uppercase;
  background: ${bgLightGrey};
  color: #AAACAA;
`
