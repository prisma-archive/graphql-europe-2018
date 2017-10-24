import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'

const gridGutter = 34 / 2 // half of desired value

const Grid = ({ children = () => {} }) => (
  <GridWrapper>
    {children(GridItem)}
  </GridWrapper>
)

export default Grid

const GridWrapper = styled.div`
  margin-right: ${rem(-gridGutter)};
  margin-left: ${rem(-gridGutter)};

  display: flex;
  flex-wrap: wrap;
  justifty-content: flex-start;
  align-items: stretch;
`

const GridItem = styled.div`
  display: inline-block;
  padding: ${rem(gridGutter)};

  ${desktop(css`
    width: 33.333%;

    &:nth-last-child(-n+3) {
      padding-bottom: 0;
    }

    &:nth-child(-n+3) {
      padding-top: 0;
    }
  `)}

  ${mobile(css`
    width: 100%;
  `)}
`
