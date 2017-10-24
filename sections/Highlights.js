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
import Grid from 'components/Grid'

const gridGutter = 34 / 2 // half of desired value

const videos = [
  {
    imageUrl: '/static/highlights/highlights-1',
    imageFormat: 'jpg',
    title: 'Five Years of Client GraphQL Infrastructure',
    description: 'Daniel Schafer, Facebook, GraphQL Co-Creator',
  },
  {
    imageUrl: '/static/highlights/highlights-2',
    imageFormat: 'jpg',
    title: 'Launching GitHub\'s Public GraphQL API',
    description: 'Brooks Swinnerton, GitHub',
  },
  {
    imageUrl: '/static/highlights/highlights-3',
    imageFormat: 'jpg',
    title: 'Closing Keynote',
    description: 'Lee Byron, Facebook, GraphQL Co-Creator',
  },
  {
    imageUrl: '/static/highlights/highlights-4',
    imageFormat: 'jpg',
    title: 'Realtime GraphQL from the Trenches',
    description: 'Tasveer Singh, Mainframe',
  },
  {
    imageUrl: '/static/highlights/highlights-5',
    imageFormat: 'jpg',
    title: 'Building a GraphQL client in Javascript',
    description: 'Mina Smart, Shopify',
  },
  {
    imageUrl: '/static/highlights/highlights-6',
    imageFormat: 'jpg',
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
          {GridItem => videos.map((v, i) => (
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
