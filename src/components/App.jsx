import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast';
export default class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    return (
      <>
        <Toaster
          toastOptions={{
            duration: 2000,
            position: 'top-right',
            style: {
              width: '500px',
              padding: '10px',
              background: 'white',
              fontSize: '25px',
              fontWeight: 'bold',
              color: 'black',
            },
          }}
        />
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.textSearch} />
      </>
    );
  }
}
