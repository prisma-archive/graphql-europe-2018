import styled from 'styled-components'

import rem from 'utils/rem'
import Navbar from 'components/Navbar'

const Wrapper = styled.div`
  position: absolute;
  top: ${p => rem(p.top) || 'auto'};
  left: ${p => rem(p.left) || 'auto'};
  bottom: ${p => rem(p.bottom) || 'auto'};
  right: ${p => rem(p.right) || 'auto'};
`

const Image = styled.img`
  transform: rotate(${p => p.rotate || 0}deg);
`

const GraphBg = ({ rotate, ...props }) => (
  <Wrapper {...props}>
    <Image
      rotate={rotate}
      src="/static/bg-graph.svg"
    />
  </Wrapper>
)

export default GraphBg
