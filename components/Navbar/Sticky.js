import React, { PureComponent } from 'react'
import debounce from 'lodash/debounce'

import { navHeight } from 'utils/sizes'
import { mobileMediaString } from 'utils/media'

const stickyPointPos = 0
const height = navHeight

class Sticky extends PureComponent {
  constructor(props) {
    super(props)
    this.checkScroll = debounce(this.checkScroll, 50)
  }

  state = {
    lastScrollPos: process.browser && getScrollPos(),
    shouldStick: false,
    isVisible: true,
    isTransitioning: false,
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

    if (typeof children !== 'function') {
      return null
    }

    return children(this.state)
  }

  checkScroll = e => {
    const { alwaysSticky, notSticky } = this.props
    const scrollPos = getScrollPos()
    const isMobile = window.matchMedia(mobileMediaString).matches

    let pos = stickyPointPos
    if (alwaysSticky) {
      pos = 1
    }

    this.setState(({
      lastScrollPos,
      shouldStick: lastShouldStick,
      isVisible: lastIsVisible,
    }) => {
      const shouldStick =
        notSticky ? false :
        isMobile ? false :
        scrollPos > pos && scrollPos < lastScrollPos // check if it's scrolling up

      const isVisible = isMobile ? true : scrollPos < height

      let isTransitioning = false
      if (shouldStick !== lastShouldStick) {
        isTransitioning = true
        setTimeout(() => {
          if (this) {
            this.setState({ isTransitioning: false })
          }
        }, 100)
      }

      return {
        shouldStick,
        isTransitioning,
        isVisible,
        lastScrollPos: scrollPos,
      }
    })
  }
}

export default Sticky

function getScrollPos() {
  return window.pageYOffset || document.body.scrollTop
}
