import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const GridItem = styled.div`
  flex: 1 0 auto;
  height: ${p => (p.small ? rem(70) : rem(100))};
  line-height: ${p => (p.small ? rem(70) : rem(100))};

  vertical-align: middle;
  text-align: center;

  ${desktop(css`
    width: ${p => (p.small ? `19%` : `24%`)};
  `)};

  ${mobile(css`
    width: 50%;
    height: ${rem(120)};
    line-height: ${rem(120)};
  `)};
`

export const LogoImage = styled.img`
  max-width: 90%;
  display: inline-block;
  vertical-align: middle;
  transform: scale(${p => (p.small ? 0.7 : 1.2)});

  ${mobile(css`
    transform: scale(${p => (p.small ? 0.6 : 0.8)});
  `)};

  max-width: ${rem(170)};
`
