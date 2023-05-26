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

  useEffect(() => {
    if (value.trim() === '') {
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
        if (data.hits.length > 0) {
          if (page === 1) {
            toast.success(`There are ${data.total} total images`);
          }

          setPictures(prevState => [...prevState, ...data.hits]);
          setStatus('resolved');
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
  }, [value, page]);

  // як реалізувати скидання ст до 1-шоі при зміні value??
  // створила ще 1 useEffect але запит дублюється, а потім вже скидається пейжа до 1
  // if (value !== prevProps.value) {
  // setPictures([]);
  // setPage(1);
  // () => {
  //   fetchPictures();
  // };

  useEffect(() => {
    setPictures([]);
    setPage(1);
  }, [value]);

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

// class ImageGallery extends Component {

//   componentDidMount() {
//     if (this.props.value.trim() !== '') {
//       this.fetchPictures();
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.value !== this.props.value) {
//       this.setState({ pictures: [], page: 1 }, () => {
//         this.fetchPictures();
//       });
//     }
//   }

//   fetchPictures = async () => {
//     const { value } = this.props;
//     const { page } = this.state;

//     try {
//       this.setState({ status: 'pending' });

//       const response = await getPictures(value.trim(), page);
//       const data = await response.json();

//       if (data.hits.length === 0) {
//         throw new Error(
//           'Unfortunately, nothing was found for your query... Please check the correctness of your input and try again!'
//         );
//       }

//       this.setState(prevState => ({
//         pictures: [...prevState.pictures, ...data.hits],
//         status: 'resolved',
//       }));
//     } catch (error) {
//       console.log(error);
//       this.setState({ error: error.message, status: 'rejected' });
//     }
//   };

//   onLoadMoreClick = () => {
//     this.setState(
//       prevState => ({ page: prevState.page + 1, status: 'pending' }),
//       () => {
//         this.fetchPictures();
//       }
//     );
//   };

//   render() {
//     const { pictures, error, status } = this.state;

//     return (
//       <>
//         {status === 'pending' && <Loader />}

//         <GalleryList>
//           {pictures.map(el => (
//             <ImageGalleryItem
//               key={el.id}
//               id={el.id}
//               webformatURL={el.webformatURL}
//               largeImageURL={el.largeImageURL}
//               tags={el.tags}
//             />
//           ))}
//         </GalleryList>

//         {status === 'resolved' && pictures.length > 0 && (
//           <LoadMoreBtn onClick={this.onLoadMoreClick} />
//         )}

//         {status === 'rejected' && <ErrorPage error={error} />}
//       </>
//     );
//   }
// }
