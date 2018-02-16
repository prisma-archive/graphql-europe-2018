import Footer from 'graphiconf/sections/Footer'
import GetYourTicket from 'graphiconf/sections/GetYourTicket'
import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'
import Speakers from 'graphiconf/sections/Speakers'

// Local
import withData from 'utils/withData'
import { speakersList } from '../utils/data'
import SeoTitle from 'components/SeoTitle'
import JoinUsIntro from '../sections/JoinUsIntro'
import JoinTheCommunity from '../sections/JoinTheCommunity'
import Highlights from '../sections/Highlights'
import CallForPapers from '../sections/CallForPapers'
import WantToSponsor from '../sections/WantToSponsor'
import TicketsGraphBgWrapper from '../sections/TicketsGraphBgWrapper'

export default withData(() => (
  <div>
    <SeoTitle />

    <JoinUsIntro />
    <JoinTheCommunity />
    <Highlights />
    <CallForPapers />
    <Speakers speakersList={speakersList} />
    <WantToSponsor />

    <TicketsGraphBgWrapper>
      {/* These 3 section share one bg */}
      <GetYourTicket />
      <CoOrganizedBy />
    </TicketsGraphBgWrapper>

    <Footer />
  </div>
))
