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

const initialValues = {
  rates: {
    rateUSDUAH: '',
    rateEURUAH: '',
    currentCurrencyRate: '',
  },
  currencyFrom: 'USD',
  currencyTo: 'UAH',
  amount: '100',
  amountFrom: true,
  currenciesList: [],
};

const converterReducer = (state = initialValues, { type, payload } = {}) => {
  switch (type) {
    case GET_RATE_USD_UAH: {
      return { ...state, rates: { ...state.rates, rateUSDUAH: payload } };
    }
    case GET_RATE_EUR_UAH: {
      return { ...state, rates: { ...state.rates, rateEURUAH: payload } };
    }
    case GET_CURRENT_RATE: {
      return {
        ...state,
        rates: { ...state.rates, currentCurrencyRate: payload },
      };
    }
    case SET_CURRENCY_FROM: {
      return { ...state, currencyFrom: payload };
    }
    case SET_CURRENCY_TO: {
      return { ...state, currencyTo: payload };
    }
    case SET_AMOUNT: {
      return { ...state, amount: payload };
    }
    case SET_AMOUNT_FROM: {
      return { ...state, amountFrom: payload };
    }
    case GET_CURRENCIES_LIST: {
      return { ...state, currenciesList: payload };
    }
    default:
      return state;
  }
};

export default converterReducer;
