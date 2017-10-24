import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { specialRed, textLightGrey } from 'utils/colors'

import Footer from '../sections/Footer'
import Navbar from 'components/Navbar'
import PageTitle from 'components/PageTitle'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import Person from 'components/Person'
import Grid from 'components/Grid'
import CoOrganizedBy from '../sections/CoOrganizedBy'

const team = [
  {
    imageUrl: '/static/team/team-1',
    imageFormat: 'jpg',
    name: 'Oleg Ilyenko',
    bio: `Oleg is a passionate software engineer and speaker who loves innovative ideas and technology, challenging problems and working on things that help other people. Oleg is an author of Sangria - a scala GraphQL implementation.`,
    twitter: 'easyangel',
    github: 'OlegIlyenko',
  },
  {
    imageUrl: '/static/team/team-2',
    imageFormat: 'jpg',
    name: 'Johannes Schickling',
    bio: `Johannes is a Berlin/SF-based entrepreneur  and founder of Graphcool, a flexible backend platform combining GraphQL+ AWS Lambda.  He previously built and sold the VR company “Optonaut”. Johannes studied computer science at KIT, Germany and loves cutting- edge mobile/web tech-nologies.`,
    twitter: '_schickling',
    github: 'schickling',
  },
  {
    imageUrl: '/static/team/team-3',
    imageFormat: 'jpg',
    name: 'Emma Tracey',
    bio: `Emma is Co-Founder at Honeypot. Born in Dublin, Emma moved to Berlin after spending time in Colombia and South Africa. She is a former journalist and likes to write about team culture and diversity.`,
    twitter: 'emchenita',
    github: 'emmalou',
  },
  {
    imageUrl: '/static/team/team-4',
    imageFormat: 'jpg',
    name: 'Johanna Dahlroos',
    bio: `Johanna is the Digital Product Designer for Daimler Fleetboard Innovation Hub. Battling confusion and finding design solutions is what she does best. Born in Finland, based in Berlin.`,
    twitter: 'batjohe',
    github: 'Batjohe',
  },
  {
    imageUrl: '/static/team/team-5',
    imageFormat: 'jpg',
    name: 'Ekaterina Kromina',
    bio: `Johannes is a Berlin/SF-based entrepreneur  and founder of Graphcool, a flexible backend platform combining GraphQL+ AWS Lambda.  He previously built and sold the VR company “Optonaut”. Johannes studied computer science at KIT, Germany and loves cutting- edge mobile/web tech-nologies.`,
    twitter: 'kromina_ek',
  },
]

export default () => (
  <div>
    <Navbar notSticky={true} />

    <CoOrganizedBy noPaddingTop={false} noPaddingBottom={true} />

    <section>
      <Container>
        <SectionContent>

          <Grid>
            {GridItem => team.map((v, i) => (
              <GridItem key={i}>
                <Person {...v} />
              </GridItem>
            ))}
          </Grid>

        </SectionContent>
      </Container>
    </section>

    <Footer />
  </div>
)
