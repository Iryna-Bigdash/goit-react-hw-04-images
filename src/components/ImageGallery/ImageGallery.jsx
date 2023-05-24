import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled';
import { getPictures } from 'services/getImg';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import LoadMoreBtn from 'components/Button/Button';

class ImageGallery extends Component {
  state = {
    pictures: [],
    error: '',
    page: 1,
    status: 'idle',
  };

  componentDidMount() {
    if (this.props.value.trim() !== '') {
      this.fetchPictures();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ pictures: [], page: 1 }, () => {
        this.fetchPictures();
      });
    }
  }

  fetchPictures = async () => {
    const { value } = this.props;
    const { page } = this.state;

    try {
      this.setState({ status: 'pending' });

      const response = await getPictures(value.trim(), page);
      const data = await response.json();

      if (data.hits.length === 0) {
        throw new Error(
          'Unfortunately, nothing was found for your query... Please check the correctness of your input and try again!'
        );
      }

      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...data.hits],
        status: 'resolved',
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  onLoadMoreClick = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1, status: 'pending' }),
      () => {
        this.fetchPictures();
      }
    );
  };

  render() {
    const { pictures, error, status } = this.state;

    return (
      <>
        {status === 'pending' && <Loader />}

        <GalleryList>
          {pictures.map(el => (
            <ImageGalleryItem
              key={el.id}
              id={el.id}
              webformatURL={el.webformatURL}
              largeImageURL={el.largeImageURL}
              tags={el.tags}
            />
          ))}
        </GalleryList>

        {status === 'resolved' && pictures.length > 0 && (
          <LoadMoreBtn onClick={this.onLoadMoreClick} />
        )}

        {status === 'rejected' && <ErrorPage error={error} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ImageGallery;
