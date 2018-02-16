import styled, { css } from 'styled-components'
import Tilt from 'react-tilt'
import retinaImage from 'polished/lib/mixins/retinaImage'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { resetButton } from 'utils/reset'
import { boxStyle } from 'utils/mixins'
import { PlayButton } from 'components/Icons'

const VideoHighlight = ({
  imageUrl,
  imageFormat,
  title,
  description,
  youtubeId,
  onClick,
}) => (
  <Tilt options={{ max: 13, scale: 1.01 }}>
    <Wrapper onClick={() => onClick(youtubeId)}>
      <ImageWrapper url={imageUrl} format={imageFormat}>
        <img src={imageUrl + '.' + imageFormat} />
      </ImageWrapper>

      <Overlay>
        <Content>
          <IconWrapper>
            <PlayButton />
          </IconWrapper>
          <TextsWrapper>
            <Title>{title}</Title>
            <Speaker>{description}</Speaker>
          </TextsWrapper>
        </Content>
      </Overlay>
    </Wrapper>
  </Tilt>
)

export default VideoHighlight

const Wrapper = styled.button`
  ${resetButton} display: block;
  position: relative;
  width: 100%;
  height: ${rem(332)};

  border-radius: ${rem(5)};
  overflow: hidden;
  background: black;

  ${boxStyle(false, false)} transform-style: preserve-3d;
  transition: opacity 150ms, box-shadow 150ms, transform 150ms ease-out;
  cursor: pointer;

  ${mobile(css`
    height: ${rem(251)};
  `)} &:hover, &:focus {
    opacity: 0.9;
  }

  &:focus {
    /* see utils/mixins for the default box shadow */
    box-shadow: ${rem(8)} ${rem(8)} ${rem(20)} rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.97);
  }
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  text-indent: -99999px;

  ${p =>
    css`
      ${retinaImage(p.url, 'cover', p.format, undefined, '@2x')};
    `} background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${rem(5)};

  img {
    display: inline-block;
    width: 100%;
  }
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;

  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.6) 100%
  );
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  width: 100%;
  min-height: ${rem(80)};
  display: flex;
  align-items: flex-start;

  padding-left: ${rem(24)};
  padding-right: ${rem(60)};
  padding-bottom: ${rem(24)};

  transform: translateZ(50px);
`

const IconWrapper = styled.div`
  filter: drop-shadow(${rem(1)} ${rem(1)} ${rem(1)} rgba(0, 0, 0, 0.1));
`

const TextsWrapper = styled.div`
  flex: 1;
  margin-left: ${rem(15)};
  color: white;
  text-shadow: 0 ${rem(1)} ${rem(4)} rgba(0, 0, 0, 0.5);
`

const Title = styled.h3`
  margin: 0;
  font-size: ${rem(15)};
  line-height: 1.2;
  font-weight: 600;
`

const Speaker = styled.p`
  margin: 0;
  line-height: 1.2;
  font-size: ${rem(14)};
`
