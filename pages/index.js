import JoinUsIntro from '../sections/JoinUsIntro'
import JoinTheCommunity from '../sections/JoinTheCommunity'
import Highlights from '../sections/Highlights'
import CallForPapers from '../sections/CallForPapers'
import Speakers from '../sections/Speakers'
import WantToSponsor from '../sections/WantToSponsor'
import TicketsGraphBgWrapper from '../sections/TicketsGraphBgWrapper'
import GetYourTicket from '../sections/GetYourTicket'
import CoOrganizedBy from '../sections/CoOrganizedBy'
import Sponsors from '../sections/Sponsors'
import Footer from '../sections/Footer'

export default () => (
  <div>
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
      <Sponsors />
    </TicketsGraphBgWrapper>

    <Footer />
  </div>
)
