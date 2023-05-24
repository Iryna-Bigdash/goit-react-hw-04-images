import PropTypes from 'prop-types';
import { React, Component } from 'react';
import Modal from 'components/Modal/Modal';
class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;

    const liStyles = {
      cursor: 'pointer',
      width: '300px',
      height: '300px',
    };

    const imgStyle = {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }

    return (
      <>
        <li style={liStyles} key={id} onClick={this.openModal}>
          <img style={imgStyle} src={webformatURL} alt={tags} />
        </li>

        {showModal && (
          <Modal onClose={this.closeModal} src={largeImageURL} alt={tags} />
        )}
      </>
    );
  }
}


export default ImageGalleryItem;

ImageGalleryItem.protoType = {
data: PropTypes.object.isRequired,
}