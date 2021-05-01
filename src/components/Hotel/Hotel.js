import React, { useState, useEffect, useRef } from "react";
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
  const isLoading = useRef(true);

  useEffect(() => {
    hotelResultService
      .get()
      .then((response) => {
        if (response && response.success) {
          const htels = filterHotelData(
            response.results.hotels,
            searchName,
            sortBy
          );
          setFilteredHotels(htels);
          setHotels(htels);
          setError(null);
        } else {
          setError(
            "Sorry, there was an error retrieving hotel data, please refresh the page"
          );
        }
      })
      .catch((error) => {
        setError(
          "Sorry, server error. Could not retrieve data. please try again"
        );
      });
  }, []);

  useEffect(() => {
    if (isLoading.current) {
      isLoading.current = false;
      setError("...loading");
    } else {
      setError(null);
      const htels = filterHotelData(hotels, searchName, sortBy);
      setFilteredHotels(htels);

      if (htels.length === 0) {
        setError("Sorry, no hotels found");
      }
    }
  }, [searchName, sortBy]);

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

  const notification = (error) =>
    error ? <div className="error">{error}</div> : "";

  return (
    <div>
      {notification(error)}
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
