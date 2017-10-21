import styled from 'styled-components'

import rem from 'utils/rem'

const Image = styled.img`
  transform: rotateZ(${p => p.rotate || 0}deg) rotateY(${p => p.flipX ? 180 : 0}deg);
`

const GraphBg = ({ rotate, flipX, ...props }) => (
  <Image
    {...props}
    rotate={rotate}
    flipX={flipX}
    src="/static/bg-graph.svg"
  />
)

export default GraphBg
