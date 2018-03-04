import { Container } from 'unstated'

export default class ModalContainer extends Container {
  state = {
    show: false,
  }

  show = () => this.setState({ show: true })
  hide = () => this.setState({ show: false })
}
