import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
import Speakers from 'graphiconf/sections/Speakers'

// Local
import withData from 'utils/withData'
import { speakersList } from '../utils/data'
import SeoTitle from 'components/SeoTitle'
import JoinUsIntro from '../sections/JoinUsIntro'
import JoinTheCommunity from '../sections/JoinTheCommunity'
import Highlights from '../sections/Highlights'
import Schedule from '../sections/Schedule'
import WantToSponsor from '../sections/WantToSponsor'
import GetYourTicket from '../sections/GetYourTicket'
import TicketsGraphBgWrapper from '../sections/TicketsGraphBgWrapper'
import Footer from '../sections/Footer'
import Sponsors from '../sections/Sponsors'
import { eventbriteLink } from '../utils/config'

export default withData(() => (
  <div>
    <SeoTitle />

    <JoinUsIntro />
    <JoinTheCommunity />
    <Highlights />
    {/* <CallForPapers /> */}
    <Speakers speakersList={speakersList} />
    <Schedule />
    <WantToSponsor />

    <TicketsGraphBgWrapper>
      {/* These 3 section share one bg */}
      <GetYourTicket eventbriteLink={eventbriteLink} />
      <Sponsors />
      <CoOrganizedBy />
    </TicketsGraphBgWrapper>

    <Footer />
  </div>
))
