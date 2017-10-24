import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'
import retinaImage from 'polished/lib/mixins/retinaImage'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'
import { specialRed } from 'utils/colors'
import { resetButton } from 'utils/reset'
import { boxStyle } from 'utils/mixins'
import { Github } from 'components/Icons'

const Person = ({
  imageUrl,
  imageFormat,
  name,
  bio,
  twitter,
  github,
  ...props
}) => (
  <Wrapper {...props}>
    <Tilt options={{ max: 10, scale: 1 }}>
      <ImageWrapper url={imageUrl} format={imageFormat}>
        <img src={`${imageUrl}.${imageFormat}`} />
      </ImageWrapper>
    </Tilt>

    <Content>
      <FirstRow>
        <Name>{name}</Name>

        <Social>
          {github &&
            <SocialLink href={`https://github.com/${github}`}>
              <Github />
            </SocialLink>
          }
        </Social>

      </FirstRow>
      <Bio>{bio}</Bio>
    </Content>
  </Wrapper>
)

export default Person

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: ${rem(332)};
  text-indent: -99999px;
  overflow: hidden;

  ${boxStyle(false, false)}
  ${p => css`${retinaImage(p.url, 'cover', p.format, undefined, '@2x')}`}

  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${rem(5)};

  img {
    display: inline-block;
    width: 100%;
  }

  ${mobile(css`
    height: ${rem(251)};
  `)}
`

const Content = styled.div`
  width: 100%;

  padding-left: ${rem(10)};
  padding-right: ${rem(10)};
  margin-top: ${rem(30)};
`

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: ${rem(16)};
`

const Name = styled.h3`
  margin: 0;
  line-height: 1.2;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: ${rem(1)};
  color: ${specialRed};
`

const Social = styled.div`
`

const Bio = styled.p`
  margin: ${rem(10)} 0 0 0;
  line-height: 1.5;
  color: #aaacaa;
`

const SocialLink = styled.a`

`
