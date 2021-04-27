import React from "react";
import "./Filters.style.scss";

const Filters = (props) => {
  return (
    <div className="filters">
      <div className="field">
        <span className="filter-title">Hotel name</span>
        <input
          type="text"
          className="input"
          name="filterSearchName filter-field"
          value={props.searchName}
          onChange={(event) => props.handleFilterSearchNameChange(event)}
          placeholder="Filter By Hotel Name"
        />
      </div>
      <div className="field">
        <span className="filter-title">Price</span>
        <select
          className="filter-field"
          name="filterSortBy"
          className="select"
          value={props.sortBy}
          onChange={(event) => props.handleFilterSortByChange(event)}
        >
          <option value="ranking">Recommended</option>
          <option value="price_ascending">Price low-to-high</option>
          <option value="price_descending">Price high-to-low</option>
        </select>
      </div>
      <button
        className="button reset"
        onClick={(event) => props.handleFilterResetClick(event)}
      >
        Reset
      </button>
    </div>
  );
};
export default Filters;
