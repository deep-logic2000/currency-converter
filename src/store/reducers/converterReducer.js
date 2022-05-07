import {
  GET_RATE_USD_UAH,
  GET_RATE_EUR_UAH,
} from "../actions/converterActions";

const initialValues = {
  rates: {
    rateUSDUAH: "",
    rateEURUAH: "",
    currentCurrencyRate: "",
  },
};

const converterReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_RATE_USD_UAH: {
      return { ...state, rates: { ...state.rates, rateUSDUAH: payload } };
    }
    case GET_RATE_EUR_UAH: {
      // const tempState = state;
      // console.log('newRates', newRates);
      // newRates[rateEURUAH] = payload;
      return { ...state, rates: { ...state.rates, rateEURUAH: payload } };
    }
    default:
      return state;
  }
};

export default converterReducer;
