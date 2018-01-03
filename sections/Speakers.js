import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import Grid from 'components/Grid'
import Person from 'components/Person'
import { InvisibleAnchor } from 'components/Anchor'

const speakersList = [
  {
    imageUrl: '/static/speakers/speakers-1',
    imageFormat: 'jpg',
    name: 'Peggy Rayzis',
    bio: 'Open Source Engineer at Apollo',
    twitter: 'peggyrayzis',
    github: 'peggyrayzis',
  },
  {
    imageUrl: '/static/speakers/speakers-2',
    imageFormat: 'jpg',
    name: 'Lee Byron',
    bio: 'Facebook, GraphQL co-creator',
    twitter: 'leeb',
    github: 'leebyron',
  },
  {
    imageUrl: '/static/speakers/speakers-3',
    imageFormat: 'jpg',
    name: 'Nick Schrock',
    bio: 'Ex-Facebook Engineer, GraphQL co-creator',
    twitter: 'schrockn',
    github: 'schrockn',
  },
  {
    imageUrl: '/static/speakers/speakers-4',
    imageFormat: 'jpg',
    name: 'Kyle Daigle',
    bio: 'Github',
    twitter: 'kdaigle',
    github: 'kdaigle',
  },
  {
    imageUrl: '/static/speakers/you-want-to-talk',
    imageFormat: 'jpg',
    name: 'This can be you!',
    bio: 'Register today',
    noShadow: true,
  },
]

const Speakers = () => [
  <InvisibleAnchor key="2" id="speakers-padded" />,

  <Wrapper key="1" id="speakers">
    <Container>
      <SectionContent>
        <SectionTitle spacing="large">
          Speakers 2018
        </SectionTitle>

        <Grid>
          {GridItem => speakersList.map((v, i) => (
            <GridItem key={i}>
              <Person {...v} />
            </GridItem>
          ))}
        </Grid>

      </SectionContent>
    </Container>
  </Wrapper>
]

export default Speakers

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`
