import PropTypes from 'prop-types';
import { Component } from 'react';
import SearchButton from 'components/SearchBtnIcon/SearchBtnIcon';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchContainer,
} from './Searchbar.styled';
import { toast }from 'react-hot-toast';
class Searchbar extends Component {
  state = {
    value: '',
  };

  handlChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.value){
      return toast.error('Error! Enter the text in the search field!');
    }
    this.props.onSearch(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchButton />
            Search
          </SearchFormBtn>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handlChange}
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}

export default Searchbar;



Searchbar.protoType = {
onSearch: PropTypes.func.isRequired,
}
