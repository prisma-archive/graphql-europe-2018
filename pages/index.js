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
import OpportunityTickets from '../sections/OpportunityTickets'
import Footer from '../sections/Footer'
import Sponsors from '../sections/Sponsors'
import { eventbriteLink } from '../utils/config'

export default withData(() => (
  <div>
    <SeoTitle />

    <JoinUsIntro />
    <JoinTheCommunity />
    <OpportunityTickets />
    <Speakers speakersList={speakersList} />
    <WantToSponsor />
    <Schedule />
    <TicketsGraphBgWrapper>
      {/* These 3 section share one bg */}
      <GetYourTicket eventbriteLink={eventbriteLink} />
      <Sponsors />
      <CoOrganizedBy />
    </TicketsGraphBgWrapper>
    <Highlights />

    <Footer />
  </div>
))
