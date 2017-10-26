import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { boxStyle } from 'utils/mixins'
import Button from 'components/Button'
import Banner from 'components/Banner'

const VideoHighlight = ({
  price,
  name,
  desc,
  href,
  comingSoon = false,
  disabled = false,
  buttonLabel = 'Get Tickets',
  onSelect = () => {},
}) => (
  <Wrapper disabled={disabled}>
    {comingSoon &&
      <ComingSoon>
        <Banner>Coming soon</Banner>
      </ComingSoon>
    }

    <Price>{price}</Price>
    <Name>{name}</Name>
    <Desc>{desc}</Desc>

    <ButtonWrapper>
      <Button
        isLink={true}
        disabled={disabled}
        href={href}
        onClick={onSelect}
      >
        {buttonLabel}
      </Button>
    </ButtonWrapper>
  </Wrapper>
)

export default VideoHighlight

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${rem(50)} 0 ${rem(50)} 0;

  text-align: center;
  color: #1f2228;

  ${boxStyle(true, true)}

  ${mobile(css`
    padding: ${rem(35)} 0 ${rem(35)} 0;
  `)}

  ${p => p.disabled ? css`
    box-shadow: none;
    color: #999;
  ` : ''}
`

const ComingSoon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

const Price = styled.div`
  margin-top: ${rem(-6)};

  font-size: ${rem(25)};
  line-height: ${rem(30)};
`

const Name = styled.div`
  margin-top: ${rem(6)};

  font-size: ${rem(40)};
  line-height: 1.2;
  font-weight: 800;
`

const Desc = styled.div`
  margin-top: ${rem(10)};

  font-size: ${rem(16)};
  line-height: 1.2;
  color: #aaacaa;
`

const ButtonWrapper = styled.div`
  margin-top: ${rem(15)};
`
