import React from 'react'
import { Provider } from 'unstated'

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
import GetYourTicket from '../sections/GetYourTicket'
import TicketsGraphBgWrapper from '../sections/TicketsGraphBgWrapper'
import Footer from '../sections/Footer'
import Sponsors from '../sections/Sponsors'
import SubscribeModal from '../components/SubscribeModal'
import { eventbriteLink } from '../utils/config'

class Index extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <SeoTitle />

          <JoinUsIntro openModal={this.openModal} />
          <JoinTheCommunity />
          <Highlights />
          <CallForPapers />
          <Speakers speakersList={speakersList} />
          <WantToSponsor />

          <TicketsGraphBgWrapper>
            {/* These 3 section share one bg */}
            <GetYourTicket
              openModal={this.openModal}
              eventbriteLink={eventbriteLink}
            />
            <Sponsors />
            <CoOrganizedBy />
          </TicketsGraphBgWrapper>

          <SubscribeModal />

          <Footer />
        </div>
      </Provider>
    )
  }
}

export default withData(Index)
