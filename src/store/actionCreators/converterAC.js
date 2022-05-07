import {
  GET_RATE_USD_UAH,
  GET_RATE_EUR_UAH,
} from "../actions/converterActions";
import * as api from "../../api/api";


export const getRateUSDUAH = () => async (dispatch) => {
  const { data } = await api
    .getRates("USD", "UAH")
    .catch((error) => console.log("error", error));
  console.log("getRateUSDUAH", data.rates.UAH.rate);
  dispatch({ type: GET_RATE_USD_UAH, payload: data.rates.UAH.rate });
};

export const getRateEURUAH = () => async (dispatch) => {
  const { data } = await api
    .getRates("EUR", "UAH")
    .catch((error) => console.log("error", error));
  console.log("getRateEURUAH", data.rates.UAH.rate);

  dispatch({ type: GET_RATE_EUR_UAH, payload: data.rates.UAH.rate });
};
// export const getRate = (from, to) => async (dispatch) => {
//   const rate = await api.getRates(from, to)
//   .catch((error) => console.log("error", error));
//   console.log('rate', rate);

//   dispatch({ type: GET_RATE, payload: rate });
// };
