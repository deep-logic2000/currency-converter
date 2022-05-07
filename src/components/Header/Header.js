import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  getRateUSDUAH,
  getRateEURUAH,
} from "../../store/actionCreators/converterAC";

import styles from "./Header.module.scss";
import flagUSA from "../../assets/svg/flagUSA.png";
import flagUkraine from "../../assets/svg/flagUkraine.png";
import flagEurope from "../../assets/svg/flagEurope.png";

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
      <header className={styles.headerWrapper}>
        <div className={styles.headerContainer}>
          <h1 className={styles.headerTitle}>CURRENCIES RATES</h1>
          <div>
            <div className={styles.rateWrapper}>
              <h3>
                Rate USD{" "}
                <img src={flagUSA} alt="flagUSA" className={styles.flag} /> to
                UAH{" "}
                <img
                  src={flagUkraine}
                  alt="flagUkraine"
                  className={styles.flag}
                />
                :
              </h3>
              <p className={styles.rateText}>{rateUSDUAH}</p>
            </div>
            <div className={styles.rateWrapper}>
              <h3>
                Rate EUR{" "}
                <img
                  src={flagEurope}
                  alt="flagEurope"
                  className={styles.flag}
                />{" "}
                to UAH{" "}
                <img
                  src={flagUkraine}
                  alt="flagUkraine"
                  className={styles.flag}
                />
                :
              </h3>
              <p className={styles.rateText}>{rateEURUAH}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
