import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Grid } from "@mui/material";

import {
  getRateUSDUAH,
  getRateEURUAH,
} from "../../store/actionCreators/converterAC";

import styles from "./Header.module.scss";

const Header = () => {
  const rateUSDUAH = useSelector(({ converter }) => converter.rates.rateUSDUAH);
  const rateEURUAH = useSelector(({ converter }) => converter.rates.rateEURUAH);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRateUSDUAH());
    dispatch(getRateEURUAH());
  }, []);

  return (
    <>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>CURRENCIES RATES</h1>
        <div>
          <div className={styles.rateWrapper}>
            <h3>Rate USD to UAH:</h3>
            <p className={styles.rateText}>{rateUSDUAH}</p>
          </div>
          <div className={styles.rateWrapper}>
            <h3>Rate EUR to UAH:</h3>
            <p className={styles.rateText}>{rateEURUAH}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
