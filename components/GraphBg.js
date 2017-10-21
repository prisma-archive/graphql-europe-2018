import styled from 'styled-components'

import rem from 'utils/rem'

const Image = styled.img`
  transform: rotate(${p => p.rotate || 0}deg);
`

const GraphBg = ({ rotate, ...props }) => (
  <Image
    {...props}
    rotate={rotate}
    src="/static/bg-graph.svg"
  />
)

export default GraphBg
