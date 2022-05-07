import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import {
  getRate,
  setCurrencyFrom,
  setCurrencyTo,
  setAmount,
  setAmountFrom,
  getCurrenciesList,
} from "../../store/actionCreators/converterAC";

import styles from "./Converter.module.scss";
import { ReactComponent as Arrows } from "../../assets/svg/arrows.svg";

const Converter = () => {
  const currentCurrencyRate = useSelector(
    ({ converter }) => converter.rates.currentCurrencyRate
  );
  const currencyFrom = useSelector((state) => state.converter.currencyFrom);
  const currencyTo = useSelector((state) => state.converter.currencyTo);
  const amount = useSelector((state) => state.converter.amount);
  const amountFrom = useSelector((state) => state.converter.amountFrom);
  const currencyList = useSelector(({ converter }) => converter.currenciesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrenciesList());
    dispatch(getRate(currencyFrom, currencyTo));
  }, []);

  useEffect(() => {
    dispatch(getRate(currencyFrom, currencyTo));
  }, [currencyFrom, currencyTo]);

  let toAmount, fromAmount;

  if (amountFrom) {
    fromAmount = amount;
    toAmount = (amount * currentCurrencyRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / currentCurrencyRate).toFixed(2);
  }

  const handleChangeFrom = (event) => {
    dispatch(setCurrencyFrom(event.target.value));
  };
  const handleChangeTo = (event) => {
    dispatch(setCurrencyTo(event.target.value));
  };

  const handleChangeFromAmount = (value) => {
    if (!isNaN(value)) {
      dispatch(setAmount(value));
      dispatch(setAmountFrom(true));
    }
  };
  const handleChangeToAmount = (value) => {
    if (!isNaN(value)) {
      dispatch(setAmount(value));
      dispatch(setAmountFrom(false));
    }
  };

  return (
    <>
      <section className={styles.converterWrapper}>
        <div className={styles.mainSectionContainer}>
          <h1 className={styles.converterTitle}>CURRENCY CONVERTER</h1>
          <div className={styles.converterInputsWrapper}>
            <div className={styles.converterInputWrapper}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="I'm exchange"
                  variant="outlined"
                  onChange={(e) => handleChangeFromAmount(e.target.value)}
                  value={fromAmount}
                  className={styles.inputFrom}
                />
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="currency-from-label">
                    Currency from
                  </InputLabel>
                  <Select
                    labelId="currency-from-label"
                    id="currency-from-label"
                    value={currencyFrom}
                    label="Currency from"
                    onChange={handleChangeFrom}
                    className={styles.inputFrom}
                  >
                    {currencyList &&
                      currencyList.map((currency) => (
                        <MenuItem key={currency} value={currency}>
                          {currency}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={styles.arrowsWrapper}>
              <Arrows className={styles.arrows} />
            </div>
            <div className={styles.converterInputWrapper}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="I'll recieve"
                  variant="outlined"
                  onChange={(e) => handleChangeToAmount(e.target.value)}
                  value={toAmount}
                  className={styles.inputFrom}
                />
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="currency-to-label">Currency to</InputLabel>
                  <Select
                    labelId="currency-to-label"
                    id="currency-to-label"
                    value={currencyTo}
                    label="Currency to"
                    onChange={handleChangeTo}
                    className={styles.inputFrom}
                  >
                    {currencyList &&
                      currencyList.map((currency) => (
                        <MenuItem key={currency} value={currency}>
                          {currency}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <p className={styles.madeBy}>Made by Nazarov Kirill</p>
        </div>
      </section>
    </>
  );
};

export default Converter;
