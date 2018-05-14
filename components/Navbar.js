import Navbar from 'components/Navbar'
import { eventbriteLink } from '../utils/config'

export default () => (
  <Navbar
    renderNormalLinks={renderNormalLinks}
    renderAnchorLinks={renderAnchorLinks}
  />
)

// Nav Links
const renderAnchorLinks = NavItem => [
  <NavItem key="3" href="#call-for-papers" isAnchor={true}>
    Speak
  </NavItem>,
  <NavItem key="4" href="#want-to-sponsor" isAnchor={true}>
    Sponsor
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
    Get Tickets
  </NavItem>,
]

const renderNormalLinks = NavItem => [
  <NavItem key="3" href="/#call-for-papers">
    Speak
  </NavItem>,
  <NavItem key="4" href="/#want-to-sponsor">
    Sponsor
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
    Get Tickets
  </NavItem>,
]
