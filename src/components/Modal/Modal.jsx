import { Overlay, ModalStl } from 'components/Modal/Modal.styled';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    this.props.onClick(e);
  };

  render() {
    const { src, alt, onClick } = this.props;

    return (
      <Overlay onClick={onClick}>
        <ModalStl>
          <img src={src} alt={alt} />
        </ModalStl>
      </Overlay>
    );
  }
}
