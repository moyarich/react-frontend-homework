import React, { useState, useEffect } from "react";
import "./Hotel.style.scss";

import hotelResultService from "../../services/hotel-result/hotel-result.service";
import Filters from "../Filters/Filters.js";
import HotelCard from "../HotelCard/HotelCard.js";
import filterHotelData from "../../utils/filterHotelData.js";

const Hotel = () => {
  const filterDefaults = {
    searchName: "",
    sortBy: "ranking",
  };
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searchName, setSearchName] = useState(filterDefaults.searchName);
  const [sortBy, setSortBy] = useState(filterDefaults.sortBy);
  const [error, setError] = useState(null);

  useEffect(() => {
    hotelResultService.get().then((response) => {
      if (response) {
        setHotels(response.results.hotels);
        return;
      }
      setError("Sorry, there was an error retrieving hotel data");
    });
  }, []);

  useEffect(() => {
    setFilteredHotels(filterHotelData(hotels, searchName, sortBy));
  }, [hotels, searchName, sortBy]);

  const handleFilterSearchNameChange = (event) => {
    setSearchName(event.target.value);
  };
  const handleFilterSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterResetClick = (event) => {
    setSearchName(filterDefaults.searchName);
    setSortBy(filterDefaults.sortBy);
  };

  return (
    <div>
      <div className="error">{error}</div>
      <div className="hotel">
        <div>
          <Filters
            searchName={searchName}
            sortBy={sortBy}
            handleFilterSearchNameChange={handleFilterSearchNameChange}
            handleFilterSortByChange={handleFilterSortByChange}
            handleFilterResetClick={handleFilterResetClick}
          />
        </div>

        <div className="hotel-list">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
