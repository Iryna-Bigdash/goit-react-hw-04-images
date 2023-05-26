import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchButton from 'components/SearchBtnIcon/SearchBtnIcon';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchContainer,
} from './Searchbar.styled';
import { toast } from 'react-hot-toast';

export default function Searchbar({ onSearch }) {
  const [value, setValue] = useState('');

  const handlChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error('Error! Enter the text in the search field!');
    }
    onSearch(value);
    setValue('');
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
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
          value={value}
          onChange={handlChange}
        />
      </SearchForm>
    </SearchContainer>
  );
}

Searchbar.protoType = {
  onSearch: PropTypes.func.isRequired,
};
