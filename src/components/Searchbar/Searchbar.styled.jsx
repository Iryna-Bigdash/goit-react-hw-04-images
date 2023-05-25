import styled from '@emotion/styled';

export const SearchContainer = styled.header`
  min-width: 100vw;
  align-items: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color:  rgba(102, 51, 153, 0.6);
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
`;

export const SearchFormBtn = styled.button`
  width: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  background-color: rgba(102, 51, 153);
  opacity: 0.8;
  color: white;
  border: none;
  border-radius: 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &&:hover {
    opacity: 1;
  }
`;
export const SearchFormInput = styled.input`
  padding: 10px;
  border-radius: 4px;

  display: inline-block;
  width: 300px;
  font-size: 16px;
  border: none;
  outline: none;

  &&::placeholder {
    font-size: 14px;
    padding-left: 10px;
  }
`;
