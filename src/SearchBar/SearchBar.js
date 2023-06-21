import React, { useCallback, useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleTermChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(searchTerm);
  }, [props.onSearch, searchTerm]);

  return (
    <div className="SearchBar">
      <input placeholder="Enter Song Title" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;