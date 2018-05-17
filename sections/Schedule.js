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
      },
    ],
    time: '09:30',
    ...styles.keynote,
  },
  {
    title: 'Keynote',
    abstract: 'TBA',
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
    abstract:
      'In 2016, Shopify began using GraphQL in production. The following year, we launched our first public GraphQL API. Now, we are rapidly scaling our GraphQL APIs both internally and externally changing engineering processes and teams along the way. This is a story about how we scale GraphQL at Shopify.',
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
    abstract: 'TBA',
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
    abstract: '',
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
    abstract:
      'GraphQL specifies what data and response shape we need and not how to get and reshape that data. At Twitter, we automatically translate GraphQL queries into code that efficiently specifies the how as well! See how we keep our API uniform and extend it without writing or deploying new code.',
    description: 'Mike Solomon',
    images: [
      {
        src: ['/static/speakers/mike-solomon.jpg'],
      },
    ],
    time: '11:10',
    ...styles.regular,
  },
  {
    title: 'Fundamental Properties of the GraphQL Language',
    abstract:
      'This talk presents a formal study of the GraphQL language. After a gentle introduction to the typical problems considered in such studies, I highlight our findings regarding these problems for the case of GraphQL. As a bonus, I present a solution to avoid producing overly large query results.',
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
    title: ' Making the Case for GraphQL: A Recipe',
    abstract: 'TBA',
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
    abstract:
      'Supercharge your GraphQL development with the linting, formatting, and static analysis tools you need to write cleaner and more reliable GraphQL.',
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
    abstract:
      'At Docker, we began using GraphQL in an unconventional way -- without a server. Using a client-side schema we gained major benefits from GraphQL with a smaller buy-in. Today we are moving our GraphQL interface to the server and exploring new technologies like GraphQL bindings, ReasonML, and more.',
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
    abstract:
      "After 5 years, we're building the next generation infrastructure at Medium with GraphQL and we're doing it without slowing product development and we're incrementally gaining benefits from the new system. See how we take advantage of GraphQL to enable widespread yet gradual architectural change!",
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
    abstract:
      'Building APIs in Java is not exciting. That changes if you throw GraphQL and Kotlin into the mix. The great library (thanks Andy) and powerful, concise language make it easy to build a GraphQL server in a few lines of code. With co-routines and lambdas as a glue, you get a neat, scalable backend.',
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
    abstract:
      'Have you ever asked "why do I need a library like Apollo or Relay to use GraphQL?" They can seem complex and intimidating. In this talk we will build our own client from the ground up to get a deep understanding of the advanced features these libraries offer.',
    description: 'Rob Richard',
    images: [
      {
        src: ['/static/speakers/rob-richard.jpg'],
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
    abstract:
      "How we used SDL, custom directives and a little expression language to unlock the GraphQL flexibility we needed. Bringing the power of GraphQL to XING is an ongoing challenge and we'd like to show you some of our answers to the most pressing question we faced down that road.",
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
    abstract:
      "GraphQL is designed to be easy to use, but newcomers to GraphQL are often tripped up by common problems and misconceptions. I'll cover how to teach GraphQL in a way that gets newbies excited ands helps them overcome the mental hurdles that prevent them from being productive with GraphQL.",
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
    abstract:
      "If you ever used or design a webhook (aka \"events\") API, you must have noticed that every one of them is a (usually messy) unique snowflake. Using GraphQL Subscriptions is the solution to fix all that, we've done it and it's much simpler than you'd think!",
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
    abstract:
      "We all here love GraphQL and we have seen how amazing Apollo can be in combination with React. But what about Vue? Vue is by itself reactive and that makes it so perfect for GraphQL and Apollo. Let's look at how to use this awesome combination to make awesomer things.",
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
    abstract: 'TBA',
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
    abstract:
      "At Samsara, we've used live queries in production for the last two years to render live data in our applications by default with minimal boilerplate and plumbing. We'll discuss our experiences: reactive backends, developer happiness, and how you too can add live queries to an existing system.",
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
    abstract:
      "GitHub has had a REST API for almost 10 years and it's powered hundreds of thousands of integrations. In the last 2 years, GitHub has been reinvesting in its platform and brought a new, public GraphQL API to market. Additionally, GitHub's engineers build, maintain, and use their own GraphQL APIs to power GitHub.com itself. In this talk, Kyle will share why GitHub is enabling integrators to build more powerful integrations, why GraphQL is an important part of the strategy, and all the joy, tears, bad code, and amazing accomplishments of our journey.",
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
