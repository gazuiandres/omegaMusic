import React from "react";
import {
  SearchBarWrapper,
  SearchInput,
  SearchIcon,
} from "../styles/components/SearchBard";
import IconSearch from "../assets/searchIcon.svg";

const SearchBar = ({ value, onChange }) => {
  return (
    <SearchBarWrapper>
      <SearchInput
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search song..."
      />
      <SearchIcon src={IconSearch} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
