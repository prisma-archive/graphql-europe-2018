import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile, desktop } from 'utils/media'
import Container from 'components/Container'
import GraphBg from 'components/GraphBg'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSeparator from 'components/SectionSeparator'
import VideoHighlight from 'components/VideoHighlight'
import FactsRow from 'components/FactsRow'
import { MobileTextBreak } from 'components/TextBreak'

const gridGutter = 34 / 2 // half of desired value

const videos = [
  {
    imageUrl: '/static/highlights/highlights-1.png',
    title: 'Five Years of Client GraphQL Infrastructure',
    description: 'Daniel Schafer, Facebook, GraphQL Co-Creator',
  },
  {
    imageUrl: '/static/highlights/graphql13-2.png',
    title: 'Launching GitHub\'s Public GraphQL API',
    description: 'Brooks Swinnerton, GitHub',
  },
  {
    imageUrl: '/static/highlights/graphql14.png',
    title: 'Closing Keynote',
    description: 'Lee Byron, Facebook, GraphQL Co-Creator',
  },
  {
    imageUrl: '/static/highlights/graphql12.png',
    title: 'Realtime GraphQL from the Trenches',
    description: 'Tasveer Singh, Mainframe',
  },
  {
    imageUrl: '/static/highlights/graphql5.png',
    title: 'Opening and closing',
    description: 'Chad Fowler, Microsoft/BlueYard',
  },
  {
    imageUrl: '/static/highlights/graphql23.png',
    title: 'Adding GraphQL to your existing architecture',
    description: 'Sashko Stubailo, Meteor/Apollo',
  },
]

const Highlights = () => (
  <Wrapper>
    <Container>
      <SectionSeparator />

      <TopGraphBgWrapper>
        <GraphBg />
      </TopGraphBgWrapper>

      <LowerGraphBgWrapper>
        <GraphBg />
      </LowerGraphBgWrapper>

      <SectionContent>
        <SectionTitle spacing="large">
          Highlights from <MobileTextBreak />GraphQL-Europe 2017
        </SectionTitle>

        <Grid>
          {videos.map((v, i) => (
            <GridItem key={i}>
              <VideoHighlight {...v} />
            </GridItem>
          ))}
        </Grid>

        <FactsRow />

      </SectionContent>
    </Container>
  </Wrapper>
)

export default Highlights

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`

const TopGraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(40)};
  left: ${rem(-140)};
  transform: rotateZ(-70deg);
`

const LowerGraphBgWrapper = styled.div`
  position: absolute;
  bottom: ${rem(40)};
  right: ${rem(-140)};
  transform: rotateZ(-70deg);
`

const Grid = styled.div`
  margin-right: ${rem(-gridGutter)};
  margin-left: ${rem(-gridGutter)};

  display: flex;
  flex-wrap: wrap;
  justifty-content: flex-start;
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
