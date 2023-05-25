import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalBackdrop,
  ModalContent,
  ModalImg,
  CloseBtn,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ src, alt, onClose }){
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', onEscClick);

    return () => {
      document.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={onBackdropClick}>
      <ModalContent>
        <ModalImg src={src} alt={alt} />
        <CloseBtn type="button" onClick={onClose}>
          X
        </CloseBtn>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.protoType = {
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
