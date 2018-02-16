import Footer from 'graphiconf/sections/Footer'
import GetYourTicket from 'graphiconf/sections/GetYourTicket'
import CoOrganizedBy from 'graphiconf/sections/CoOrganizedBy'

// Local
import withData from 'utils/withData'
import SeoTitle from 'components/SeoTitle'
import JoinUsIntro from '../sections/JoinUsIntro'
import JoinTheCommunity from '../sections/JoinTheCommunity'
import Highlights from '../sections/Highlights'
import CallForPapers from '../sections/CallForPapers'
import Speakers from '../sections/Speakers'
import WantToSponsor from '../sections/WantToSponsor'
import TicketsGraphBgWrapper from '../sections/TicketsGraphBgWrapper'

export default withData(() => (
  <div>
    <SeoTitle />

    <JoinUsIntro />
    <JoinTheCommunity />
    <Highlights />
    <CallForPapers />
    <Speakers />
    <WantToSponsor />

    <TicketsGraphBgWrapper>
      {/* These 3 section share one bg */}
      <GetYourTicket />
      <CoOrganizedBy />
    </TicketsGraphBgWrapper>

    <Footer />
  </div>
))
