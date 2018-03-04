import React from 'react'
import styled from 'styled-components'
import { Subscribe } from 'unstated'

import Button from 'components/Button'
import ModalContainer from '../containers/ModalContainer'

export default class SubscribeModal extends React.Component {
  render() {
    return (
      <Subscribe to={[ModalContainer]}>
        {modal =>
          modal.state.show && (
            <Overlay>
              <Window>
                <Close onClick={() => modal.hide()}>
                  <CloseIcon />
                </Close>

                <Title>Subscribe To Get Ticket</Title>
                <Subtitle>
                  We will only email you once the tickets are out, no spam.
                </Subtitle>
                <form onSubmit={this.onSubmit}>
                  <InputsWrapper>
                    <Input placeholder="Name" />
                    <Input placeholder="Email" type="email" />
                  </InputsWrapper>
                  <Button>Submit</Button>
                </form>
              </Window>
            </Overlay>
          )
        }
      </Subscribe>
    )
  }

  onSubmit = e => {
    e.preventDefault()
    // TODO: Submit
  }
}

const CloseIcon = () => (
  <svg viewBox="0 0 47.971 47.971" width="20" height="20">
    <path
      d="M28.228 23.986L47.092 5.122c1.172-1.171 1.172-3.071 0-4.242-1.172-1.172-3.07-1.172-4.242 0L23.986 19.744 5.121.88C3.949-.292 2.051-.292.879.88c-1.172 1.171-1.172 3.071 0 4.242l18.865 18.864L.879 42.85c-1.172 1.171-1.172 3.071 0 4.242.586.585 1.354.878 2.121.878s1.535-.293 2.121-.879l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879c1.172-1.171 1.172-3.071 0-4.242L28.228 23.986z"
      fill="#677580"
    />
  </svg>
)

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 11;
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;
`

const Close = styled.button`
  border: none;
  background: none;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0.4;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`

const Window = styled.div`
  position: absolute;
  width: 100%;
  max-width: 550px;
  min-height: 60px;
  padding: 20px 20px 30px 20px;
  border-radius: 2px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 10px;
`

const Subtitle = styled.p`
  margin: 0 0 30px 0;
  color: #666;
`

const InputsWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const Input = styled.input`
  text-align: center;
  background: white;
  border: none;
  font-size: 18px;
  padding: 5px 0;
  border-bottom: 2px solid #ddd;
  margin-right: 8px;
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  &:focus {
    border-bottom-color: #999;
  }

  ::placeholder {
    color: #aaa;
  }
`
