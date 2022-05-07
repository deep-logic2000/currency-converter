import axios from "axios";

const BASE_URL = "https://api.getgeoapi.com/v2/currency";

export const getRates = (from, to) => {
  return axios.get(
    `${BASE_URL}/convert?api_key=6286cbdf8e2f3f6cc49b2e3f0f6d82d72fec776b&from=${from}&to=${to}&format=json`
  );
};

export const getCurrenciesList = () => {
  return axios.get(`${BASE_URL}/list?api_key=6286cbdf8e2f3f6cc49b2e3f0f6d82d72fec776b&format=json`);
};
