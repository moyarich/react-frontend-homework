import React from "react";
import { shallow } from "enzyme";
import HotelCard from "./HotelCard.js";

describe("HotelCard", () => {
  const props = {
    hotel: {
      id: "907",
      rewards: {
        miles: 10000,
      },
      lowestAveragePrice: {
        currency: "USD",
        symbol: "&#36;",
        amount: 579.0,
      },
      hotelStaticContent: {
        hotelId: 907,
        languageCode: "en",
        mainImage: {
          category: "EXTERIOR",
          url:
            "http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg",
          source: "SOURCE1",
        },
        name: "Omni Chicago Hotel & Suites Magnificent Mile",
        neighborhoodName: "Magnificent Mile",
        address: {
          line1: "676 North Michigan Avenue",
          line2: null,
          city: "Chicago",
          stateName: "Illinois",
          stateCode: "IL",
          countryName: "United States",
          countryCode: "US",
          zipCode: "60611",
          latitude: 41.89475,
          longitude: -87.62465,
          timeZoneId: "America/Chicago",
        },
        description:
          "This luxury hotel is located in the centre of Chicago on the prestigious Gold Coast and a few minutes walk from the Magnificent Mile. 46 suites and 239 double rooms are located on 17 storeys and can be reached by lift. Check-in and check-out are possible at any time at the 24-hour reception desk. Amenities available at the hotel include a safe and a cash machine. Wireless internet access is provided in public areas. The hotel has wheelchair-accessible facilities. A fireplace creates a cosy atmosphere. Additional amenities include a TV room and a library. Guests arriving by car can park their vehicles in the garage or in the car park. Further services and facilities include room service and a laundry service. Air conditioning and individually adjustable heating ensure that rooms maintain comfortable temperatures. All rooms are carpeted and include a double bed, a queen-size bed or a king-size bed. A safe, a minibar and a desk are also available. Additional features include a refrigerator, a mini fridge and a tea/coffee station. An ironing set is provided for guests' convenience. A direct dial telephone, a TV, a radio and WiFi are provided as well. A hairdryer and bathrobes are available in the bathrooms, which are equipped with a shower and a bathtub. The hotel has 285 non-smoking rooms. Guests can enjoy a selection of sport and entertainment options. There are many ways to relax or stay active at the hotel, including cycling/mountain biking and a gym. Parents can unwind while the kids can participate in an entertainment programme full of fun activities. Various dining options are available, including a dining room, a caf\u00e9 and a bar. A number of specialities await guests in the air-conditioned, non-smoking restaurant.",
        amenities: [
          {
            name: "Parking",
          },
          {
            name: "Restaurant",
          },
          {
            name: "Pets Allowed",
          },
          {
            name: "Room Service",
          },
          {
            name: "Meeting Banquet Facilities",
          },
          {
            name: "Bar",
          },
          {
            name: "24 Hour Front Desk",
          },
          {
            name: "Gym",
          },
          {
            name: "Golf",
          },
          {
            name: "Non-Smoking",
          },
          {
            name: "Business Center",
          },
          {
            name: "Laundry",
          },
          {
            name: "Handicapped Access",
          },
          {
            name: "Internet Access",
          },
          {
            name: "Elevators",
          },
          {
            name: "Express Check In",
          },
          {
            name: "Safe",
          },
          {
            name: "Valet Parking",
          },
          {
            name: "Heated Guest Rooms",
          },
          {
            name: "A/C",
          },
          {
            name: "ATM",
          },
          {
            name: "Concierge",
          },
        ],
        phoneNumber: "5555550000",
        stars: 4,
        rating: 9,
        numberOfReviews: 685,
        brandCode: "1324",
        brandName: "Omni Hotels",
        propertyType: 204,
        propertyTypeName: "Hotel",
      },
    },
  };

  const setup = (props = {}) => {
    return shallow(<HotelCard {...props} />);
  };

  it("renders the HotelCard component", () => {
    const wrapper = setup(props);
    expect(wrapper.find(".hotel-card").exists()).toBe(true);
  });
});
