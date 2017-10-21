import styled from 'styled-components'

import rem from 'utils/rem'
import { textLightGrey, specialRed } from 'utils/colors'
import Navbar from 'components/Navbar'
import GraphBg from 'components/GraphBg'
import Container from 'components/Container'
import Button from 'components/Button'

const JoinUsIntro = () => (
  <Wrapper>
    <GraphBg
      rotate={40}
      top={-140}
      right={-40}
    />

    <NavbarFloater>
      <Navbar />
    </NavbarFloater>

    <Container>
      <Content>
        <Title>Join us for Europe’s biggest<br />GraphQL-dedicated conference</Title>
        <Description>
          GraphQL-Europe is a non-profit GraphQL conference in Europe with speakers from all around the world. Learn about GraphQL best practices from industry experts and become part of the thriving GraphQL community. GraphQL-Europe is organized by Graph.Cool and Honeypot.
        </Description>

        <Meta>
          <MetaItem>
            <MetaItemKey>Date</MetaItemKey>
            <MetaItemValue>TBA, 2018</MetaItemValue>
          </MetaItem>
          <MetaItem>
            <MetaItemKey>Location</MetaItemKey>
            <MetaItemValue>TBA, Berlin</MetaItemValue>
          </MetaItem>
        </Meta>

        <ButtonWrapper>
          <Button>Get Ticket</Button>
        </ButtonWrapper>

      </Content>
    </Container>

  </Wrapper>
)

export default JoinUsIntro

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: ${rem(70)};
  padding-bottom: ${rem(30)};
`

const NavbarFloater = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const Content = styled.div`
  padding-top: ${rem(90)};
  padding-bottom: ${rem(90)};
`

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: ${rem(45)};
  font-weight: 800;
`

const Description = styled.p`
  margin-top: ${rem(40)};
  margin-bottom: 0;

  max-width: ${rem(620)};
  line-height: 1.5;
  color: ${textLightGrey};
`

const Meta = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`

const MetaItem = styled.div`
  min-width: ${rem(155)};
  display: inline-block;
`

const MetaItemKey = styled.div`
  line-height: 1.1;
  font-size: ${rem(16)};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: ${specialRed};
`

const MetaItemValue = styled.div`

`

const ButtonWrapper = styled.div`
  margin-top: ${rem(40)};
  margin-bottom: 0;
`
