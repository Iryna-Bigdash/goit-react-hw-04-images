import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ModalContent,
  ModalImg,
  CloseBtn,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <ModalBackdrop onClick={this.onBackdropClick}>
        <ModalContent>
          <ModalImg src={src} alt={alt} />
          <CloseBtn type="button" onClick={this.props.onClose}>
            X
          </CloseBtn>
        </ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;

Modal.protoType = {
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
