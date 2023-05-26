import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import { GalleryList } from './ImageGallery.styled';
import { getPictures } from 'services/getImg';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import ErrorPage from 'components/ErrorPage/ErrorPage';
import LoadMoreBtn from 'components/Button/Button';

export default function ImageGallery({ value }) {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [nextValue, setNextValue] = useState('');

  useEffect(() => {
    if (value.trim() === '') {
      return;
    }

    if (nextValue !== value) {
      setPictures([]);
      setPage(1);
      setNextValue(value);
      return;
    }

    async function fetchPictures() {
      try {
        const response = await getPictures(value.trim(), page);
        const data = await response.json();
        setStatus('pending');

        if (data.hits.length === 0) {
          setPictures([]);
          setStatus('rejected');
          throw new Error(
            'Unfortunately, nothing was found for your query... Please check the correctness of your input and try again!'
          );
        }
        setPictures(prevState => [...prevState, ...data.hits]);
        setStatus('resolved');

        if (data.hits.length > 0) {
          if (page === 1) {
            toast.success(`There are ${data.total} total images`);
          }
        }

        if (data.hits.length === data.total) {
          toast.success(`You watched all ${data.total} images`);
        }
        return;
      } catch (error) {
        console.log(error);
        setError(error.message);
        setStatus('rejected');
      }
    }

    fetchPictures();
  }, [value, page, nextValue]);

  const onLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
    setStatus('pending');
  };

  return (
    <>
      {status === 'rejected' && <ErrorPage error={error} />}
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
      {status === 'pending' && <Loader />}

      {status === 'resolved' && pictures.length > 0 && (
        <LoadMoreBtn onClick={onLoadMoreClick} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  value: PropTypes.string.isRequired,
};
