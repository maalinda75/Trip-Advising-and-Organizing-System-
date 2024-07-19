import React from 'react';
import '../../style.css';

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          role="searchbox"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="bx bx-search icon"></i>
      </div>
    </form>
  );
};

export default Search;