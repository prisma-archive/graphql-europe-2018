import styled, { css } from 'styled-components'

import rem from 'utils/rem'
import { mobile } from 'utils/media'
import { textDarkGrey } from 'utils/colors'
import { upperCaseHeading } from 'utils/mixins'
import { graphqlConfLink } from '../utils/config'
import withData from 'utils/withData'
import TopBanner from 'graphiconf/components/TopBanner'

import SeoTitle from 'components/SeoTitle'
import Footer from '../sections/Footer'
import Navbar from '../components/Navbar'
import PageTitle from 'components/PageTitle'
import Container from 'components/Container'
import SectionContent from 'components/SectionContent'

export default withData(() => (
  <div>
    <SeoTitle prependTitle="Code of Conduct" />

    <Navbar notSticky={true} />

    <TopBanner
      href={graphqlConfLink}
      bullet="Heads up!"
      children={<span>You're viewing an old version of our website. Get <strong>redirected</strong> to the new page.</span>} />

    <section>
      <Container>
        <SectionContent>
          <PageTitle>Code of Conduct</PageTitle>
          <Desc>
            All attendees, speakers, sponsors and volunteers at our conference
            are required to agree with the following code of conduct. Organisers
            will enforce this code throughout the event. We expect cooperation
            from all participants to help ensure a safe environment for
            everybody.
          </Desc>

          <Body>
            <Heading>The Quick Version</Heading>
            <p>
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery
              is not appropriate for any conference venue, including talks,
              workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled
              from the conference without a refund at the discretion of the
              conference organisers.
            </p>

            <Heading>The Less Quick Version</Heading>
            <p>
              Harassment includes offensive verbal comments related to gender,
              gender identity and expression, age, sexual orientation,
              disability, physical appearance, body size, race, ethnicity,
              religion, technology choices, sexual images in public spaces,
              deliberate intimidation, stalking, following, harassing
              photography or recording, sustained disruption of talks or other
              events, inappropriate physical contact, and unwelcome sexual
              attention.
            </p>
            <p>
              Participants asked to stop any harassing behavior are expected to
              comply immediately. Sponsors are also subject to the
              anti-harassment policy. In particular, sponsors should not use
              sexualised images, activities, or other material. Booth staff
              (including volunteers) should not use sexualised
              clothing/uniforms/costumes, or otherwise create a sexualised
              environment. If a participant engages in harassing behavior, the
              conference organisers may take any action they deem appropriate,
              including warning the offender or expulsion from the conference
              with no refund.
            </p>
            <p>
              If you are being harassed, notice that someone else is being
              harassed, or have any other concerns, please contact a member of
              conference staff immediately. Conference staff can be identified
              as they'll be wearing branded clothing and/or badges. Conference
              staff will be happy to help participants contact hotel/venue
              security or local law enforcement, provide escorts, or otherwise
              assist those experiencing harassment to feel safe for the duration
              of the conference. We value your attendance.
            </p>
            <p>
              We expect participants to follow these rules at conference and
              workshop venues and conference-related social events.
            </p>

            <Heading>More info</Heading>
            <p>
              For more information, please check the original version:
              http://confcodeofconduct.com.
            </p>

            <Heading>Need help?</Heading>
            <p>You have our contact details in the emails we've sent.</p>
          </Body>
        </SectionContent>
      </Container>
    </section>

    <Footer />
  </div>
))

const Desc = styled.p`
  max-width: ${rem(800)};
  font-size: ${rem(25)};
  line-height: 1.67;

  ${mobile(css`
    font-size: ${rem(18)};
  `)};
`

const Body = styled.div`
  margin-top: ${rem(90)};
  font-size: ${rem(18)};

  ${mobile(css`
    margin-top: ${rem(45)};
  `)} p {
    max-width: ${rem(800)};

    margin-top: 0;
    margin-bottom: ${rem(25)};
    color: ${textDarkGrey};
    line-height: 1.5;
  }
`

const Heading = styled.h2`
  margin-top: ${rem(30)};
  margin-bottom: ${rem(25)};

  ${upperCaseHeading};
`
