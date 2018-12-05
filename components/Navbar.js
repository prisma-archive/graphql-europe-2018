import Navbar from 'components/Navbar'
import { eventbriteLink } from '../utils/config'

export default props => (
  <Navbar
    {...props}
    renderNormalLinks={renderNormalLinks}
    renderAnchorLinks={renderAnchorLinks}
  />
)

// Nav Links
const renderAnchorLinks = NavItem => [
  <NavItem key="2" href="#schedule" isAnchor={true}>
    Schedule
  </NavItem>,
  <NavItem key="3" href="#opportunity" isAnchor={true}>
    Opportunity Tickets
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
    Get Tickets
  </NavItem>,
]

const renderNormalLinks = NavItem => [
  <NavItem key="2" href="/#schedule">
    Schedule
  </NavItem>,
  <NavItem key="3" href="/#opportunity">
    Opportunity Tickets
  </NavItem>,
  <NavItem key="6" href="/team">
    Team
  </NavItem>,
  <NavItem key="7" href={eventbriteLink} isButtonStyle={true}>
    Get Tickets
  </NavItem>,
]
