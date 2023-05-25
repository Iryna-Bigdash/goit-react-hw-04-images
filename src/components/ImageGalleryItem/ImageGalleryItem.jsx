import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const liStyles = {
    cursor: 'pointer',
    padding: '5px',
    width: '200px',
    height: '200px',
    border: '1px solid rgba(102, 51, 153, 0.6)',
    borderRadius: '4px',
  };

  const imgStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
  };

  return (
    <>
      <li style={liStyles} key={id} onClick={openModal}>
        <img style={imgStyle} src={webformatURL} alt={tags} />
      </li>

      {showModal && (
        <Modal onClose={closeModal} src={largeImageURL} alt={tags} />
      )}
    </>
  );
}

ImageGalleryItem.protoType = {
  data: PropTypes.object.isRequired,
};
