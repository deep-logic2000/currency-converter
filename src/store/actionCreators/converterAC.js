import {
  GET_RATE_USD_UAH,
  GET_RATE_EUR_UAH,
  GET_CURRENT_RATE,
  SET_CURRENCY_FROM,
  SET_CURRENCY_TO,
  SET_AMOUNT,
  SET_AMOUNT_FROM,
  GET_CURRENCIES_LIST,
} from "../actions/converterActions";
import * as api from "../../api/api";

export const getRateUSDUAH = () => async (dispatch) => {
  const { data } = await api
    .getRates("USD", "UAH")
    .catch((error) => console.log("error", error));
  dispatch({ type: GET_RATE_USD_UAH, payload: data.rates.UAH.rate });
};

export const getRateEURUAH = () => async (dispatch) => {
  const { data } = await api
    .getRates("EUR", "UAH")
    .catch((error) => console.log("error", error));
  dispatch({ type: GET_RATE_EUR_UAH, payload: data.rates.UAH.rate });
};

export const getCurrenciesList = () => async (dispatch) => {
  const { data } = await api
    .getCurrenciesList()
    .catch((error) => console.log("error", error));
  const currensiesList = [...Object.keys(data.currencies)].sort();
  dispatch({ type: GET_CURRENCIES_LIST, payload: currensiesList });
};

export const getRate = (from, to) => async (dispatch) => {
  const { data } = await api
    .getRates(from, to)
    .catch((error) => console.log("error", error));

  dispatch({ type: GET_CURRENT_RATE, payload: data.rates[to].rate });
};

export const setCurrencyFrom = (currencyFrom) => (dispatch) => {
  dispatch({ type: SET_CURRENCY_FROM, payload: currencyFrom });
};

export const setCurrencyTo = (currencyTo) => (dispatch) => {
  dispatch({ type: SET_CURRENCY_TO, payload: currencyTo });
};
export const setAmount = (value) => (dispatch) => {
  dispatch({ type: SET_AMOUNT, payload: value });
};

export const setAmountFrom = (value) => (dispatch) => {
  dispatch({ type: SET_AMOUNT_FROM, payload: value });
};
