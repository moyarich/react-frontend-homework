const filterHotelData = (hotels, searchName, sortBy) => {
  let filteredHotels = hotels.slice();
  if (searchName) {
    filteredHotels = filteredHotels.filter((hotel) => {
      return hotel.hotelStaticContent.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
    });
  }

  let sortFn;
  switch (sortBy) {
    case "ranking":
      sortFn = (a, b) =>
        a.hotelStaticContent.rating - b.hotelStaticContent.rating;
      break;
    case "price_ascending":
      sortFn = (a, b) =>
        a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;
      break;
    case "price_descending":
      sortFn = (a, b) =>
        b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;
      break;
  }

  filteredHotels.sort(sortFn);
  return filteredHotels;
};

export default filterHotelData;
