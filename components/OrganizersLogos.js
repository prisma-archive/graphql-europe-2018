import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { X } from 'components/Icons'

const OrganizersLogos = ({ compact = false }) => (
  <Wrapper>
    <FlexWrapper compact={compact}>
      <a href="https://www.honeypot.io/" target="_blank">
        <LogoImage src="/static/logos/honeypot.svg" alt="Honeypot" compact={compact} />
      </a>

      <XWrapper compact={compact}><X /></XWrapper>

      <a href="https://www.graph.cool/" target="_blank">
        <LogoImage src="/static/logos/graphcool.svg" alt="Graphcool" compact={compact} last={true} />
      </a>
    </FlexWrapper>
  </Wrapper>
)

export default OrganizersLogos

const Wrapper = styled.div`
  display: inline-block;
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  ${mobile(css`
    ${p => !p.compact ? css`
      flex-direction: column;
      align-items: flex-start;
    `: ''}
  `)}
`

const XWrapper = styled.div`
  margin: 0 ${rem(30)};

  ${p => p.compact ? css`
    margin: 0 ${rem(18)};

    svg {
      width: ${rem(15)};
      height: auto;

      path {
        stroke-width: 2px;
      }
    }
  ` : ''}

  ${mobile(css`
    ${p => !p.compact && css`
      display: none;
    `}
  `)}
`

const LogoImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  height: ${rem(50)};
  transition: all 70ms;

  &:hover {
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
    top: -1px;
    left: -1px;
    opacity: 0.9;
  }

  ${p => p.compact && css`
    height: ${rem(25)};
  `}

  ${mobile(css`
    ${p => !p.compact && css`
      width: ${rem(230)};
      height: auto;
      margin-bottom: ${rem(20)};
    `}

    ${p => p.last && css`
      margin-bottom: 0;
    `}
  `)}
`
