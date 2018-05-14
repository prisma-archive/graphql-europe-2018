import styled from 'styled-components'

import ScheduleRow from 'components/ScheduleRow'
import SectionTitle from 'components/SectionTitle'
import Container from 'components/Container'

const styles = {
  keynote: {
    bg: 'rgb(254,238,244)',
    color: 'rgb(217,66,117)',
  },
  break: {
    bg: 'rgb(242, 242, 242)',
    color: 'rgb(80,90,105)',
  },
  lightning: {
    bg: 'rgb(253, 243, 231)',
    color: 'rgb(242,141,34)',
  },
  regular: {
    bg: 'rgb(240, 236, 254)',
    color: 'rgb(64,47,157)',
  },
}

const scheduleList = [
  {
    title: 'Registration & Breakfast',
    description: `Don't be late!`,
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '08:30',
    ...styles.break,
  },
  {
    title: 'Welcome',
    description: 'Lee Byron',
    images: [
      {
        src: '/static/speakers/lee-byron.jpg',
        icon: true,
      },
    ],
    time: '09:30',
    ...styles.keynote,
  },
  {
    title: 'Keynote',
    description: 'Nick Schrock',
    images: [
      {
        src: ['/static/speakers/nick-schrock.jpg'],
      },
    ],
    time: '09:40',
    ...styles.regular,
  },
  {
    title: ' Case Study: Scaling GraphQL at Shopify',
    description: 'Leanne Shapton',
    images: [
      {
        src: ['/static/speakers/leanne-shapton.png'],
      },
    ],
    time: '10:00',
    ...styles.regular,
  },
  {
    title: 'Breaking up the monolith – A layered GraphQL architecture',
    description: 'Johannes Schickling',
    images: [
      {
        src: ['/static/speakers/johannes-schickling.jpg'],
      },
    ],
    time: '10:20',
    ...styles.regular,
  },
  {
    title: 'Coffee break (30 min)',
    description: 'Talk about GraphQL while enjoying fresh coffee and tea',
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '10:40',
    ...styles.break,
  },
  {
    title: 'Transpiling GraphQL instead of writing customized server code',
    description: 'Mike Solomon',
    images: [
      {
        src: [],
      },
    ],
    time: '11:10',
    ...styles.regular,
  },
  {
    title: 'Fundamental Properties of the GraphQL Language',
    description: 'Olaf Hartig',
    images: [
      {
        src: ['/static/speakers/olaf-hartig.jpg'],
      },
    ],
    time: '11:30',
    ...styles.regular,
  },
  {
    title: 'GraphQL Recipe',
    description: 'Jira Vinyoopongphan',
    images: [
      {
        src: ['/static/speakers/jira-vinyoopongphan.jpg'],
      },
    ],
    time: '11:50',
    ...styles.lightning,
  },
  {
    title: 'Supercharge Your GraphQL Development',
    description: 'Jon Wong',
    images: [
      {
        src: ['/static/speakers/jon-wong.jpg'],
      },
    ],
    time: '12:00',
    ...styles.lightning,
  },
  {
    title: 'Lunch',
    description: 'Tasty food & Hot coffee',
    images: [
      {
        src: '/static/schedule/cutlery.svg',
        icon: true,
      },
    ],
    time: '12:10',
    ...styles.break,
  },
  {
    title: 'Going Full Graph',
    description: 'Tyler Martinez',
    images: [
      {
        src: ['/static/speakers/tyler-martinez.jpg'],
      },
    ],
    time: '13:30',
    ...styles.regular,
  },
  {
    title: '2 Fast 2 Furious: migrating Medium’s codebase without slowing down',
    description: 'Sasha Solomon',
    images: [
      {
        src: ['/static/speakers/sasha-solomon.jpg'],
      },
    ],
    time: '13:50',
    ...styles.regular,
  },
  {
    title:
      "Not your Dad's Java - Building a GraphQL Server with Kotlin and graphql-java",
    description: 'Michael Hunger',
    images: [
      {
        src: ['/static/speakers/michael-hunger.jpg'],
      },
    ],
    time: '14:10',
    ...styles.lightning,
  },
  {
    title: 'Write your own GraphQL Client ',
    description: 'Rob Richards',
    images: [
      {
        src: ['/static/speakers/rob-richards.jpg'],
      },
    ],
    time: '14:20',
    ...styles.lightning,
  },
  {
    title: 'Coffee break (30 min)',
    description: 'Talk about GraphQL while enjoying fresh coffee and tea',
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '14:30',
    ...styles.break,
  },
  {
    title: 'Supercharged SDL',
    description: 'David Krentzlin',
    images: [
      {
        src: ['/static/speakers/david-krentzlin.jpg'],
      },
    ],
    time: '15:00',
    ...styles.regular,
  },
  {
    title: 'Teaching GraphQL',
    description: 'Daniel Woelfel',
    images: [
      {
        src: ['/static/speakers/daniel-woelfel.jpg'],
      },
    ],
    time: '15:20',
    ...styles.regular,
  },
  {
    title:
      'GraphQL Subscriptions in their untold glory: building a public Webhook API',
    description: 'Arnaud Rinquin',
    images: [
      {
        src: ['/static/speakers/arnaud-rinquin.jpg'],
      },
    ],
    time: '15:40',
    ...styles.lightning,
  },
  {
    title: 'GraphQL + Apollo + Vue = Magic',
    description: 'Sara Vieira',
    images: [
      {
        src: ['static/speakers/sara-vieira.jpg'],
      },
    ],
    time: '15:50',
    ...styles.lightning,
  },
  {
    title: 'Coffee break (30 min)',
    description: 'Talk about GraphQL while enjoying fresh coffee and tea',
    images: [
      {
        src: '/static/schedule/coffee.svg',
        icon: true,
      },
    ],
    time: '16:00',
    ...styles.break,
  },
  {
    title: 'TBA',
    description: 'Peggy Rayzis',
    images: [
      {
        src: ['static/speakers/peggy-rayzis.jpg'],
      },
    ],
    time: '16:30',
    ...styles.regular,
  },
  {
    title: 'GraphQL + Live Queries: 2 Years in Production',
    description: 'Stephen Wan',
    images: [
      {
        src: ['/static/speakers/stephen-wan.jpg'],
      },
    ],
    time: '16:50',
    ...styles.regular,
  },
  {
    title: "Fast, Slow, Beautiful, Ugly: Building GitHub's Platform",
    description: 'Kyle Daigle',
    images: [
      {
        src: ['static/speakers/kyle-daigle.jpg'],
      },
    ],
    time: '17:10',
    ...styles.regular,
  },
  {
    title: 'Closing',
    description: 'Lee Byron',
    images: [
      {
        src: ['static/speakers/lee-byron.jpg'],
      },
    ],
    time: '17:30',
    ...styles.keynote,
  },
]

export default () => (
  <Wrapper>
    <Container>
      <SectionTitle>Schedule</SectionTitle>
      <List>
        {scheduleList.map((row, i) => <ScheduleRow key={i} {...row} />)}
      </List>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  padding-top: 0px;
  padding-bottom: 100px;
`

const List = styled.div`
  padding-top: 30px;
`
