import styled from '@emotion/styled';

export const SearchContainer = styled.header`
  min-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color:  rgba(102, 51, 153, 0.6);
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 50px 200px;
  width: 100%;
  border-radius: 3px;
`;
export const SearchFormBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  font-weight: bold;
  padding: 16px;
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
  height: 45px;
  padding: 10px;
  border-radius: 4px;

  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;

  &&::placeholder {
    padding-left: 10px;
  }
`;
