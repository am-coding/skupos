import { FC } from 'react';
import styled from 'styled-components';

const StyledSearchInput = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 18em;
  height: 1.5em;
  padding: 0.5em;
  input {
    border: none;
    font-size: 0.9em;
  }
  input:focus {
    outline: none;
  }
  img {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.7em;
    margin-left: 0.2em;
  }
`;

const SearchInput: FC = () => {
    return (
        <StyledSearchInput>
            <img src="/Group.png" alt="search-icon" />
            <input placeholder="Search" />
        </StyledSearchInput>
    )
}

export default SearchInput;
