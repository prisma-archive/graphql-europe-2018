import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import Youtube from 'react-youtube'
import PropTypes from 'prop-types'

import rem from 'utils/rem'
import { mobile } from 'utils/media'

const opts = {
  height: '450',
  width: '780',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
}

class VideoModal extends PureComponent {
  static propTypes = {
    youtubeId: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  }

  static defaultProps = {
    isOpen: false
  }

  state = {
    loading: true
  }

  componentDidMount() {
    if (process.browser) {
      window.addEventListener('keydown', this.handleKeyPress)
    }
  }

  render() {
    const { isOpen, youtubeId } = this.props

    if (!isOpen) {
      return null
    }

    return (
      <Overlay onClick={this.overlayClicked}>
        {this.state.loading &&
          <Loading />
        }

        <Youtube
          videoId={youtubeId}
          opts={opts}
          onReady={this.onReady}
        />
      </Overlay>
    )
  }

  closeModal = () => {
    this.setState({ loading: true });
    this.props.onClose && this.props.onClose()
  }

  overlayClicked = e => {
    e.stopPropagation()
    this.closeModal()
  }

  onReady = () => {
    this.setState({ loading: false });
  }

  handleKeyPress = e => {
    if (e.keyCode === 27) {
      this.closeModal()
    }
  }
}

export default VideoModal

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  background: rgba(0, 0, 0, 0.85);

  ${mobile(css`
    span,
    iframe {
      width: 98%;
      max-width: ${rem(480)};
      height: ${rem(480*9/16)};
    }
  `)}
`

const Loading = styled.div.attrs({
  children: 'It\'s loading...'
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: ${rem(30)};
  font-size: ${rem(45)};
  font-weight: 800;
  color: white;
`
