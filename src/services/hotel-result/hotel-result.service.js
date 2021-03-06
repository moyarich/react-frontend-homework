import axios from "axios";

class HotelResultService {
  get() {
    return axios
      .get("http://localhost:8080/rest/rates")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

const hotelResultService = new HotelResultService();

export default hotelResultService;
