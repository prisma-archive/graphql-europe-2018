import styled, { css } from 'styled-components'
import retinaImage from 'polished/lib/mixins/retinaImage'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { bgLightGrey } from 'utils/colors'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import Button from 'components/Button'
import { InvisibleAnchor } from 'components/Anchor'

const WantToSponsor = ({ noPic = false }) => [
  <InvisibleAnchor key="1" id="want-to-sponsor-padded" />,

  <Wrapper key="2" id="want-to-sponsor">
    <Container>
      <SectionContent>
        <FlexWrapper noPic={noPic}>
          <ImageWrapper noPic={noPic}>
            <img src="/static/photos/sponsors.png" />
          </ImageWrapper>

          <Texts noPic={noPic}>
            <SectionTitle spacing="medium">Want to sponsor?</SectionTitle>

            <Desc>
              GraphQL Europe is an excellent opportunity to reach some of the
              best software developers in the industry. Contact our sponsor team
              for more information regarding sponsor packages.
            </Desc>

            <ButtonWrapper noPic={noPic}>
              <Button isLink={true} href="mailto:sponsors@graphql-europe.org">
                Contact Us
              </Button>
            </ButtonWrapper>
          </Texts>
        </FlexWrapper>
      </SectionContent>
    </Container>
  </Wrapper>,
]

export default WantToSponsor

const Wrapper = styled.section`
  position: relative;
  background: ${bgLightGrey};

  ${mobile(css`
    margin-left: 0;
  `)};
`

const FlexWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  ${p =>
    p.noPic &&
    css`
      justify-content: center;
    `};
`

const Texts = styled.div`
  width: ${rem(441)};
  padding: ${rem(16)} 0;
  margin-left: ${rem(86)};

  ${p =>
    p.noPic &&
    css`
      width: 100%;
      max-width: ${rem(735)};
      margin-left: 0;
      padding: 0;
      text-align: center;
    `} ${mobile(css`
      width: 100%;
      margin-left: 0;
      padding: ${rem(45)} 0 0 0;

      ${p =>
        p.noPic &&
        css`
          padding: 0;
        `};
    `)};
`

const ImageWrapper = styled.div`
  ${retinaImage(
    '/static/photos/sponsors',
    'cover',
    'png',
    undefined,
    '@2x',
  )} flex: 1 1 auto;
  background-position: center center;
  background-repeat: no-repeat;
  text-indent: -99999px;

  img {
    height: 1px;
    width: 1px;
    display: none;
  }

  ${p =>
    p.noPic &&
    css`
      display: none;
    `} ${mobile(css`
      width: 100%;
      height: ${rem(250)};
    `)};
`

const Desc = styled.p`
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`

const ButtonWrapper = styled.div`
  margin-top: ${rem(35)};
  display: flex;
  align-items: center;

  ${p =>
    p.noPic &&
    css`
      justify-content: center;
    `};
`
