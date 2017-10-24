import React, { PureComponent } from 'react'
import debounce from 'lodash/debounce'

import { navHeight } from 'utils/sizes'
import { mobileMediaString } from 'utils/media'

const stickyPointPos = 350
const height = navHeight

class Sticky extends PureComponent {
  constructor(props) {
    super(props)
    this.checkScroll = debounce(this.checkScroll, 50)
  }

  state = {
    shouldStick: false,
    isVisible: true,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll, { passive: true })
    window.addEventListener('resize', this.checkScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll, { passive: true })
    window.removeEventListener('resize', this.checkScroll, { passive: true })
  }

  render() {
    const { children } = this.props
    const { shouldStick, isVisible } = this.state

    if (typeof children !== 'function') {
      return null
    }

    return children({ shouldStick, isVisible })
  }

  checkScroll = e => {
    const scrollPos = window.pageYOffset || document.body.scrollTop
    const isMobile = window.matchMedia(mobileMediaString).matches
    this.setState({
      shouldStick: isMobile ? false : scrollPos > stickyPointPos,
      isVisible: isMobile ? true : scrollPos < height,
    })
  }
}

export default Sticky
