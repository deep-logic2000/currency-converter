import React, { useState } from "react";

import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import styles from "./Converter.module.scss";
import { ReactComponent as Arrows } from "../../assets/svg/arrows.svg";

const Converter = () => {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [amount, setAmount] = useState(0);



  const handleChangeFrom = (event) => {
    setCurrencyFrom(event.target.value);
  };
  const handleChangeTo = (event) => {
    setCurrencyTo(event.target.value);
  };
  
  const handleChangeAmount = (value) => {
    setAmount(value);
  };

  console.log('amount', amount);


  return (
    <>
      <div className={styles.converterWrapper}>
          <h1>CURRENCY CONVERTER</h1>
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
                onChange={e => handleChangeAmount(e.target.value)}
                // value={currency === n.name ? value : (value / rate * n.rate).toFixed(2)}
              />
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="currency-from-label">Currency from</InputLabel>
                <Select
                  labelId="currency-from-label"
                  id="currency-from-label"
                  value={currencyFrom}
                  label="Currency from"
                  onChange={handleChangeFrom}
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"UAH"}>UAH</MenuItem>
                  <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <Arrows />
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
                onChange={e => handleChangeAmount(e.target.value)}
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
                >
                  <MenuItem value={"USD"}>USD</MenuItem>
                  <MenuItem value={"UAH"}>UAH</MenuItem>
                  <MenuItem value={"EUR"}>EUR</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Converter;
