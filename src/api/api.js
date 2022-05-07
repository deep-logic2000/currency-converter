import axios from "axios";

const BASE_URL =
  "https://api.getgeoapi.com/v2/currency/convert?api_key=6286cbdf8e2f3f6cc49b2e3f0f6d82d72fec776b";

export const getRates = (from, to) => {
  return axios.get(`${BASE_URL}&from=${from}&to=${to}&format=json`);
};

