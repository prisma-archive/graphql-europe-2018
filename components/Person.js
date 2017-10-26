import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'
import retinaImage from 'polished/lib/mixins/retinaImage'

import rem from 'utils/rem'
import { mobile, desktop } from 'utils/media'
import { specialRed } from 'utils/colors'
import { resetButton } from 'utils/reset'
import { boxStyle, upperCaseHeading } from 'utils/mixins'
import { Github, Twitter } from 'components/Icons'

const Person = ({
  imageUrl,
  imageFormat,
  name,
  bio,
  twitter,
  github,
  blackAndWhite = false,
  noShadow = false,
  ...props
}) => (
  <Wrapper {...props}>
    <Tilt options={{ max: 10, scale: 1 }}>
      <ImageWrapper
        url={imageUrl}
        format={imageFormat}
        noShadow={noShadow}
        blackAndWhite={blackAndWhite}
      >
        <img src={`${imageUrl}.${imageFormat}`} />
      </ImageWrapper>
    </Tilt>

    <Content>
      <FirstRow>
        <Name>{name}</Name>

        <Social>
          {twitter &&
            <SocialLink href={`https://twitter.com/${twitter}`}>
              <Twitter />
            </SocialLink>
          }
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
  ${p => p.blackAndWhite && css`
    filter: saturate(0) brightness(1.02);
  `}
  ${p => p.noShadow && css`
    box-shadow: none;
  `}

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
  padding-right: ${rem(3)}; /* social icons have paddings on the sides */
  margin-top: ${rem(30)};
`

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
`

const Name = styled.h3`
  margin: 0;

  ${upperCaseHeading}
`

const Social = styled.div`
`

const Bio = styled.p`
  margin: ${rem(7)} 0 0 0;
  line-height: 1.3;
  color: #aaacaa;
  font-size: ${rem(16)};
`

const SocialLink = styled.a`
  padding: 0 ${rem(7)};
  text-decoration: none;

  svg {
    height: ${rem(16)};
  }

  path {
    fill: #cacaca;
    transition: fill 100ms ease-out;
  }

  &:hover {
    path {
      fill: #888;
    }
  }
`
