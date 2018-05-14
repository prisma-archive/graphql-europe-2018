import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { specialRed } from 'utils/colors'
import { mobile } from 'utils/media'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'
import SectionContent from 'components/SectionContent'
import SectionSeparator from 'components/SectionSeparator'

const JoinTheCommunity = () => (
  <Wrapper>
    <Container>
      <SectionSeparator />

      <SectionContent>
        <SectionTitle>Join the community</SectionTitle>
        <Description>
          Join the official GraphQL Europe{' '}
          <a href="https://slack.prisma.io/">Slack channel</a>. This is your
          chance to meet your peers, organize informal chats and activities, or
          ask questions about the conference or Berlin. Join us in Prisma's
          Slack:​ #graphql-europe.
        </Description>
      </SectionContent>
    </Container>
  </Wrapper>
)

export default JoinTheCommunity

const Wrapper = styled.section``

const Description = styled.p`
  margin: 0;
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`
