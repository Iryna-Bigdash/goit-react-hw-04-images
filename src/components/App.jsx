import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
export default function App() {
  const [textSearch, setTextSearch] = useState('');

  const handleSubmit = textSearch => {
    setTextSearch(textSearch);
  };

  return (
    <div
      style={{
        paddingBottom: '30px',
      }}
    >
      <Toaster
        toastOptions={{
          duration: 2000,
          position: 'top-right',
          style: {
            width: '400px',
            padding: '10px',
            background: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black',
          },
        }}
      />
      <Searchbar onSearch={handleSubmit} />
      <ImageGallery value={textSearch} />
    </div>
  );
}
