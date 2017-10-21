import styled from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionSeparator from 'components/SectionSeparator'

const JoinTheCommunity = () => (
  <Wrapper>
    <Container>
      <SectionSeparator />

      <Content>
        <SectionTitle>Join the community</SectionTitle>
        <Description>
          Join the official GraphQL-Europe{' '}
          <a href="https://slack.com">Slack channel</a>.{' '}
          This is your chance to meet your peers, organize informal chats and activities, or ask questions about the conference or Berlin. Join us in Graphcool's Slack:​ #graphql-europe-comm.
        </Description>
      </Content>
    </Container>
  </Wrapper>
)

export default JoinTheCommunity

const Wrapper = styled.section``

const Content = styled.div`
  padding-top: ${rem(90)};
  padding-bottom: ${rem(90)};
`

const Description = styled.p`
  margin: 0;
  font-size: ${rem(25)};
  line-height: 1.67;
`
