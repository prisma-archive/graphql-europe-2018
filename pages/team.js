import withData from 'utils/withData'
import SeoTitle from 'components/SeoTitle'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'
import Person from 'components/Person'
import Grid from 'components/Grid'
import Navbar from '../components/Navbar'
import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
import WantToSponsor from '../sections/WantToSponsor'
import Footer from '../sections/Footer'

const team = [
  {
    imageUrl: '/static/team/team-1',
    imageFormat: 'jpg',
    name: 'Oleg Ilyenko',
    bio: `Oleg is a passionate software engineer and speaker who loves innovative ideas and technology, challenging problems and working on things that help other people. Oleg is an author of Sangria - a scala GraphQL implementation.`,
    twitter: 'easyangel',
    github: 'OlegIlyenko',
    blackAndWhite: true,
  },
  {
    imageUrl: '/static/team/team-2',
    imageFormat: 'jpg',
    name: 'Johannes Schickling',
    bio: `Johannes is a Berlin/SF-based entrepreneur  and founder of Prisma, a flexible backend platform combining GraphQL+ AWS Lambda.  He previously built and sold the VR company “Optonaut”. Johannes studied computer science at KIT, Germany and loves cutting- edge mobile/web tech-nologies.`,
    twitter: '_schickling',
    github: 'schickling',
    blackAndWhite: true,
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
    bio: `Ekaterina is a Growth Manager at Honeypot. Originally from Moscow, Kate moved to Amsterdam to study management in creative industries. With experience in advertising and cinema, she enjoys making events happen.`,
    twitter: 'kromina_ek',
  },
  {
    imageUrl: '/static/team/team-6',
    imageFormat: 'jpg',
    name: 'Mohammad Rajabifard',
    bio: `Mohammad is a Software Developer, currently focused on open source work specially in Javascript. He's helping with styled-components project and he loves designing interfaces and experiences. He happily did this website w/ Next!`,
    twitter: 'morajabi',
    github: 'morajabi',
  },
  {
    imageUrl: '/static/team/team-7',
    imageFormat: 'jpg',
    name: 'Nikolas Burk',
    bio: `Nikolas is a GraphQL enthusiast who enjoys learning and teaching. He works at Prisma taking care of developer relations, writing tutorials, documentation, holds GraphQL workshops and is a frequent speaker at conferences.`,
    twitter: 'nikolasburk',
    github: 'nikolasburk',
  },
  {
    imageUrl: '/static/speakers/lee-byron',
    imageFormat: 'jpg',
    name: 'Lee Byron',
    bio: `As one of the creators of GraphQL and lead of the GraphQL working group, Lee is certainly one of the most knowledgeable people in the entire GraphQL space. As a co-host of GraphQL Europe, Lee is part of the review committee for selecting the talks and holds the welcome and closing speeches. He works at Robinhood where helps lead web engineering and previously worked on open source at Facebook.`,
    twitter: 'leeb',
    github: 'leebyron',
    blackAndWhite: true,
  },
]

export default withData(() => (
  <div>
    <SeoTitle prependTitle="Team" />

    <Navbar notSticky={true} />

    <CoOrganizedBy noPaddingTop={false} noPaddingBottom={true} />

    <section>
      <Container>
        <SectionContent>
          <Grid>
            {GridItem =>
              team.map((v, i) => (
                <GridItem key={i}>
                  <Person {...v} />
                </GridItem>
              ))
            }
          </Grid>
        </SectionContent>
      </Container>
    </section>

    <WantToSponsor noPic={true} />

    <Footer />
  </div>
))
