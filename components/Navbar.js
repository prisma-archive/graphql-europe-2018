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
  <NavItem key="3" href="#opportunity" isAnchor={true}>
    Opportunity Tickets
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
  <NavItem key="3" href="/#opportunity">
    Opportunity Tickets
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
