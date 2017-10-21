import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import Container from 'components/Container'
import GraphBg from 'components/GraphBg'
import SectionTitle from 'components/SectionTitle'
import SectionSeparator from 'components/SectionSeparator'
import VideoHighlight from 'components/VideoHighlight'

const gridGutter = 34 / 2 // half of desired value

const videos = [
  {
    imageUrl: '/static/highlights-1.png',
    title: 'Five Years of Client GraphQL Infrastructure',
    description: 'Daniel Schafer, Facebook, GraphQL co-creator',
  },
  {
    imageUrl: '/static/graphql13-2.png',
    title: 'Launching GitHub\'s Public GraphQL API',
    description: 'Brooks Swinnerton, GitHub',
  },
  {
    imageUrl: '/static/graphql14.png',
    title: 'Closing Keynote',
    description: 'Lee Byron, Facebook, GraphQL co-creator',
  },
  {
    imageUrl: '/static/graphql12.png',
    title: 'Realtime GraphQL from the Trenches',
    description: 'Tasveer Singh, Mainframe',
  },
  {
    imageUrl: '/static/graphql5.png',
    title: 'Opening and closing',
    description: 'Chad Fowler, Microsoft/BlueYard',
  },
  {
    imageUrl: '/static/graphql23.png',
    title: 'Adding GraphQL to your existing architecture',
    description: 'Sashko Stubailo, Meteor/Apollo',
  },
]

const Highlights = () => (
  <Wrapper>
    <Container>
      <SectionSeparator />

      <TopGraphBgWrapper>
        <GraphBg rotate={-70} />
      </TopGraphBgWrapper>

      <LowerGraphBgWrapper>
        <GraphBg rotate={-70} />
      </LowerGraphBgWrapper>

      <Content>
        <SectionTitle spacing="large">
          Highlights from GraphQL-Europe 2017
        </SectionTitle>

        <Grid>
          {videos.map((v, i) => (
            <GridItem>
              <VideoHighlight {...v} />
            </GridItem>
          ))}
        </Grid>

      </Content>
    </Container>
  </Wrapper>
)

export default Highlights

const Wrapper = styled.section`
  position: relative;
  height: 1200px;
  overflow: hidden;
`

const TopGraphBgWrapper = styled.div`
  position: absolute;
  top: ${rem(40)};
  left: ${rem(-140)};
`

const LowerGraphBgWrapper = styled.div`
  position: absolute;
  bottom: ${rem(40)};
  right: ${rem(-140)};
`

const Content = styled.div`
  position: relative;
  padding-top: ${rem(90)};
  padding-bottom: ${rem(90)};
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
  width: 33.333%;
  padding: ${rem(gridGutter)};

  &:nth-last-child(-n+3) {
    padding-bottom: 0;
  }

  &:nth-child(-n+3) {
    padding-top: 0;
  }
`

const Fill = styled.div`
  width: 100%;
  height: 40px;
  background: #000;
`
