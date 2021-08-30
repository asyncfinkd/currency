import React, { useState } from "react";
import { ApplicationContext } from "../../context/Application/ApplicationContext";
import Alert from "@material-ui/lab/Alert";
// import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AppPages() {
  const { Application } = React.useContext(ApplicationContext);
  const [showLength, setShowLength] = useState(6);
  // const useStyles = makeStyles(() => ({
  //   container: {
  //     width: 295,
  //     position: "absolute",
  //     top: "15px",
  //     right: "10px",
  //     zIndex: "9",
  //     fontFamily: "MarkGEO",
  //     fontSize: "12px",
  //   },
  // }));
  // const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  React.useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }
  });

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>ვალუტის კურსი</title>
      </Helmet>
      <AnimatePresence>
        {modal && (
          <Alert
            severity="error"
            style={{
              position: "fixed",
              width: "295px",
              top: "15px",
              right: "10px",
              zIndex: "9",
              fontFamily: "MarkGEO",
              fontSize: "12px",
            }}
          >
            <motion.div
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ეს ფუნქცია დროებით გათიშულია.
            </motion.div>
          </Alert>
        )}
      </AnimatePresence>
      <div className="content">
        <div className="container">
          <div className="container-main">
            <div className="container__center">
              <div className="container-flex__title">
                <div className="container:flex">
                  <span className="container-flex__titleSPAN" slot="title">
                    {Application.data.topCurrencies.title}
                  </span>
                  <span className="container-flex__titleSPAN" slot="date">
                    ბოლო განახლება {Application.data.currencyData.updateDate}
                  </span>
                </div>
                <div>
                  <button
                    className="container__button"
                    slot="calculator__btn"
                    onClick={() => setModal(true)}
                  >
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="icons-48-general-calculator-fill"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <rect
                          id="shape"
                          x="0"
                          y="0"
                          width="48"
                          height="48"
                        ></rect>
                        <path
                          d="M41.5102041,1.71428567 L6.48979588,1.71428567 C3.85235442,1.71428567 1.71428567,3.85235442 1.71428567,6.48979588 L1.71428567,41.5102041 C1.71428567,44.1476456 3.85235442,46.2857143 6.48979588,46.2857143 L41.5102041,46.2857143 C44.1476456,46.2857143 46.2857143,44.1476456 46.2857143,41.5102041 L46.2857143,6.48979588 C46.2857143,3.85235442 44.1476456,1.71428567 41.5102041,1.71428567 L41.5102041,1.71428567 Z M20.3467347,35.612449 C20.8010069,36.0014778 20.9988815,36.6123109 20.8590039,37.1938098 C20.7191263,37.7753087 20.2651046,38.2293304 19.6836057,38.369208 C19.1021068,38.5090856 18.4912737,38.3112111 18.1022449,37.8569388 L15.2448979,35.007551 L12.387551,37.8569388 C11.7559734,38.397808 10.8145072,38.3614432 10.226532,37.773468 C9.63855677,37.1854928 9.60219201,36.2440266 10.1430612,35.612449 L12.992449,32.7551021 L10.1430612,29.8977551 C9.60219201,29.2661775 9.63855677,28.3247113 10.226532,27.7367361 C10.8145072,27.1487609 11.7559734,27.1123961 12.387551,27.6532653 L15.2448979,30.5026531 L18.1022449,27.6532653 C18.7338225,27.1123961 19.6752887,27.1487609 20.2632639,27.7367361 C20.8512391,28.3247113 20.8876039,29.2661775 20.3467347,29.8977551 L17.4973469,32.7551021 L20.3467347,35.612449 Z M20.0204082,17.632653 L16.8367347,17.632653 L16.8367347,20.8163265 C16.8367347,21.6954737 16.1240451,22.4081633 15.2448979,22.4081633 C14.3657508,22.4081633 13.6530612,21.6954737 13.6530612,20.8163265 L13.6530612,17.632653 L10.4693877,17.632653 C9.59024057,17.632653 8.87755099,16.9199635 8.87755099,16.0408163 C8.87755099,15.1616692 9.59024057,14.4489796 10.4693877,14.4489796 L13.6530612,14.4489796 L13.6530612,11.2653061 C13.6530612,10.3861589 14.3657508,9.67346936 15.2448979,9.67346936 C16.1240451,9.67346936 16.8367347,10.3861589 16.8367347,11.2653061 L16.8367347,14.4489796 L20.0204082,14.4489796 C20.8995553,14.4489796 21.6122449,15.1616692 21.6122449,16.0408163 C21.6122449,16.9199635 20.8995553,17.632653 20.0204082,17.632653 Z M37.5306123,37.5306123 L27.9795918,37.5306123 C27.1004447,37.5306123 26.3877551,36.8179227 26.3877551,35.9387755 C26.3877551,35.0596284 27.1004447,34.3469388 27.9795918,34.3469388 L37.5306123,34.3469388 C38.4097594,34.3469388 39.122449,35.0596284 39.122449,35.9387755 C39.122449,36.8179227 38.4097594,37.5306123 37.5306123,37.5306123 Z M37.5306123,30.367347 L27.9795918,30.367347 C27.1004447,30.367347 26.3877551,29.6546574 26.3877551,28.7755102 C26.3877551,27.8963631 27.1004447,27.1836735 27.9795918,27.1836735 L37.5306123,27.1836735 C38.4097594,27.1836735 39.122449,27.8963631 39.122449,28.7755102 C39.122449,29.6546574 38.4097594,30.367347 37.5306123,30.367347 Z M37.5306123,17.632653 L27.9795918,17.632653 C27.1004447,17.632653 26.3877551,16.9199635 26.3877551,16.0408163 C26.3877551,15.1616692 27.1004447,14.4489796 27.9795918,14.4489796 L37.5306123,14.4489796 C38.4097594,14.4489796 39.122449,15.1616692 39.122449,16.0408163 C39.122449,16.9199635 38.4097594,17.632653 37.5306123,17.632653 Z"
                          id="general-:-calculator-:-fill"
                          fill="currentColor"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                    კალკულატორი
                  </button>
                </div>
              </div>
              <div className="container-bottom-section">
                {console.log(Application.data.currencyData.currenciesList)}
                {Application.data.currencyData.currenciesList
                  .slice(0, 3)
                  .map((item) => {
                    const {
                      ccy,
                      name,
                      currentRate,
                      dgtlBuyRate,
                      dgtlSellRate,
                    } = item;
                    return (
                      <>
                        <div className="container-card">
                          <div className="card__container">
                            <div className="card__head">
                              <div className="card__currency">{ccy}</div>
                              <span className="card__name">{name}</span>
                              <button className="card__button">
                                <svg
                                  width="48px"
                                  height="48px"
                                  viewBox="0 0 48 48"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="icons-48-general-chart-fill"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      id="shape"
                                      x="0"
                                      y="0"
                                      width="48"
                                      height="48"
                                    ></rect>
                                    <path
                                      d="M44.6938776,43.1020409 C45.5730247,43.1020409 46.2857143,43.8147304 46.2857143,44.6938776 C46.2857143,45.5730247 45.5730247,46.2857143 44.6938776,46.2857143 L44.6938776,46.2857143 L3.30612241,46.2857143 C2.42697525,46.2857143 1.71428567,45.5730247 1.71428567,44.6938776 C1.71428567,43.8147304 2.42697525,43.1020409 3.30612241,43.1020409 L3.30612241,43.1020409 Z M11.2653061,20.8163265 C13.0236004,20.8163265 14.4489796,22.2417057 14.4489796,24 L14.4489796,24 L14.4489796,38.3265306 C14.4489796,39.2056778 13.73629,39.9183674 12.8571428,39.9183674 L12.8571428,39.9183674 L6.48979588,39.9183674 C5.61064873,39.9183674 4.89795915,39.2056778 4.89795915,38.3265306 L4.89795915,38.3265306 L4.89795915,24 C4.89795915,22.2417057 6.32333831,20.8163265 8.08163262,20.8163265 L8.08163262,20.8163265 Z M25.5918367,11.2653061 C27.350131,11.2653061 28.7755102,12.6906853 28.7755102,14.4489796 L28.7755102,14.4489796 L28.7755102,38.3265306 C28.7755102,39.2056778 28.0628206,39.9183674 27.1836735,39.9183674 L27.1836735,39.9183674 L20.8163265,39.9183674 C19.9371794,39.9183674 19.2244898,39.2056778 19.2244898,38.3265306 L19.2244898,38.3265306 L19.2244898,14.4489796 C19.2244898,12.6906853 20.649869,11.2653061 22.4081633,11.2653061 L22.4081633,11.2653061 Z M39.9183674,1.71428567 C41.6766617,1.71428567 43.1020409,3.13966484 43.1020409,4.89795915 L43.1020409,4.89795915 L43.1020409,38.3265306 C43.1020409,39.2056778 42.3893513,39.9183674 41.5102041,39.9183674 L41.5102041,39.9183674 L35.1428572,39.9183674 C34.26371,39.9183674 33.5510204,39.2056778 33.5510204,38.3265306 L33.5510204,38.3265306 L33.5510204,4.89795915 C33.5510204,3.13966484 34.9763996,1.71428567 36.7346939,1.71428567 L36.7346939,1.71428567 Z"
                                      id="Combined-Shape"
                                      fill="currentColor"
                                      fill-rule="nonzero"
                                    ></path>
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <div className="card__content">
                              <div className="item">
                                <span>ოფიც. კურსი</span>
                                <div className="rates">
                                  <div className="rates__content">
                                    <div className="label"></div>
                                    <div className="bank__rate">
                                      {currentRate}
                                    </div>
                                    <div className="diff__rate">
                                      <svg
                                        width="48px"
                                        height="48px"
                                        viewBox="0 0 48 48"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <g
                                          id="icons-48-system-chevron_up"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <rect
                                            id="shape"
                                            x="0"
                                            y="0"
                                            width="48"
                                            height="48"
                                          ></rect>
                                          <path
                                            d="M44.3755102,34.8244898 C43.9016153,34.8231922 43.4461011,34.6409865 43.1020409,34.3151021 L24.6367347,17.0595918 L6.19689792,34.3151021 C5.72447211,34.8997619 4.95307957,35.1530089 4.22604555,34.9621297 C3.49901153,34.7712505 2.95150781,34.1717339 2.82721298,33.430408 C2.70291815,32.6890821 3.02494139,31.9437758 3.64995914,31.5262041 L23.3632653,13.0608979 C24.0814214,12.3943652 25.192048,12.3943652 25.9102041,13.0608979 L45.6489796,31.5262041 C46.4053475,32.2324373 46.4618115,33.4125337 45.7763266,34.1877551 C45.4165227,34.5832004 44.9100318,34.8134235 44.3755102,34.8244898 L44.3755102,34.8244898 Z"
                                            id="Mask"
                                            fill="currentColor"
                                            fill-rule="nonzero"
                                          ></path>
                                        </g>
                                      </svg>
                                      <span>0.0000</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item__containerDisplay">
                                <div className="item">
                                  <div class="vertical-divisor"></div>
                                </div>
                                <div className="item">
                                  <span className="item__courseSPAN">
                                    საბითუმო კურსი
                                  </span>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div className="rates direction:column">
                                      <div className="label">ყიდვა</div>
                                      <div
                                        className="bank__rate"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {dgtlBuyRate}0
                                      </div>
                                    </div>
                                    <div
                                      className="rates direction:column"
                                      style={{ marginLeft: "64px" }}
                                    >
                                      <div className="label">გაყიდვა</div>
                                      <div
                                        className="bank__rate"
                                        style={{ fontWeight: "500" }}
                                      >
                                        {dgtlSellRate}0
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item responsive__item">
                                <div class="vertical-divisor"></div>
                              </div>
                              <div className="item responsive__item">
                                <span className="item__courseSPAN">
                                  საბითუმო კურსი
                                </span>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div className="rates direction:column">
                                    <div className="label">ყიდვა</div>
                                    <div
                                      className="bank__rate"
                                      style={{ fontWeight: "500" }}
                                    >
                                      {dgtlBuyRate}0
                                    </div>
                                  </div>
                                  <div
                                    className="rates direction:column"
                                    style={{ marginLeft: "64px" }}
                                  >
                                    <div className="label">გაყიდვა</div>
                                    <div
                                      className="bank__rate"
                                      style={{ fontWeight: "500" }}
                                    >
                                      {dgtlSellRate}0
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all__coursesContainer">
        <div className="all__courses__topSection">
          <span>ყველა ვალუტა</span>
          <input type="text" placeholder="ვალუტის ძებნა" />
        </div>
        <div className="all__courses__bottomSection">
          <div className="all__courses__bottomSectionTable">
            <div className="all__courses__bottomSectionTableBody">
              <div className="table-header table-row">
                <div className="table-cell">ვალუტა</div>
                <div className="table-cell">ოფიციალური კურსი</div>
                <div className="table-cell">კომერციული კურსი</div>
                <div className="table-cell"></div>
              </div>
              <div className="table-header table-row">
                <div className="table-cell"></div>
                <div className="table-cell"></div>
                <div className="table-cell">
                  <div>
                    <span>ყიდვა</span>
                    <span>გაყიდვა</span>
                  </div>
                </div>
                <div className="table-cell"></div>
              </div>
              {Application.data.currencyData.currenciesList
                .slice(0, showLength)
                .map((item) => {
                  return (
                    <>
                      <div className="table-header table-row table-odd-element">
                        <div className="table-cell">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <div className="card__currency">{item.viewCcy}</div>
                            <span className="card__name">
                              {item.rateWeight} {item.name}
                            </span>
                          </div>
                        </div>
                        <div className="table-cell">
                          <div className="table-cell-container">
                            <div className="table-cell-bank-rate">
                              {item.currentRate}
                            </div>
                            <div className="table-cell-diff-rate">
                              <div className="table-cell-diff-rate-content">
                                <svg
                                  width="9px"
                                  height="9px"
                                  viewBox="0 0 48 48"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="icons-48-system-chevron_up"
                                    stroke="none"
                                    stroke-width="1"
                                    fill="none"
                                    fill-rule="evenodd"
                                  >
                                    <rect
                                      id="shape"
                                      x="0"
                                      y="0"
                                      width="48"
                                      height="48"
                                    ></rect>
                                    <path
                                      d="M44.3755102,34.8244898 C43.9016153,34.8231922 43.4461011,34.6409865 43.1020409,34.3151021 L24.6367347,17.0595918 L6.19689792,34.3151021 C5.72447211,34.8997619 4.95307957,35.1530089 4.22604555,34.9621297 C3.49901153,34.7712505 2.95150781,34.1717339 2.82721298,33.430408 C2.70291815,32.6890821 3.02494139,31.9437758 3.64995914,31.5262041 L23.3632653,13.0608979 C24.0814214,12.3943652 25.192048,12.3943652 25.9102041,13.0608979 L45.6489796,31.5262041 C46.4053475,32.2324373 46.4618115,33.4125337 45.7763266,34.1877551 C45.4165227,34.5832004 44.9100318,34.8134235 44.3755102,34.8244898 L44.3755102,34.8244898 Z"
                                      id="Mask"
                                      fill="currentColor"
                                      fill-rule="nonzero"
                                    ></path>
                                  </g>
                                </svg>
                                <span>0.0000</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="table-cell">
                          <div>
                            <div className="table-cell-price-paragraph">
                              {item.buyRate}0
                            </div>
                            <div className="table-cell-price-paragraph">
                              {item.sellRate}0
                            </div>
                          </div>
                        </div>
                        <div className="table-cell">
                          <button className="card__button">
                            <svg
                              width="48px"
                              height="48px"
                              viewBox="0 0 48 48"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g
                                id="icons-48-general-chart-fill"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <rect
                                  id="shape"
                                  x="0"
                                  y="0"
                                  width="48"
                                  height="48"
                                ></rect>
                                <path
                                  d="M44.6938776,43.1020409 C45.5730247,43.1020409 46.2857143,43.8147304 46.2857143,44.6938776 C46.2857143,45.5730247 45.5730247,46.2857143 44.6938776,46.2857143 L44.6938776,46.2857143 L3.30612241,46.2857143 C2.42697525,46.2857143 1.71428567,45.5730247 1.71428567,44.6938776 C1.71428567,43.8147304 2.42697525,43.1020409 3.30612241,43.1020409 L3.30612241,43.1020409 Z M11.2653061,20.8163265 C13.0236004,20.8163265 14.4489796,22.2417057 14.4489796,24 L14.4489796,24 L14.4489796,38.3265306 C14.4489796,39.2056778 13.73629,39.9183674 12.8571428,39.9183674 L12.8571428,39.9183674 L6.48979588,39.9183674 C5.61064873,39.9183674 4.89795915,39.2056778 4.89795915,38.3265306 L4.89795915,38.3265306 L4.89795915,24 C4.89795915,22.2417057 6.32333831,20.8163265 8.08163262,20.8163265 L8.08163262,20.8163265 Z M25.5918367,11.2653061 C27.350131,11.2653061 28.7755102,12.6906853 28.7755102,14.4489796 L28.7755102,14.4489796 L28.7755102,38.3265306 C28.7755102,39.2056778 28.0628206,39.9183674 27.1836735,39.9183674 L27.1836735,39.9183674 L20.8163265,39.9183674 C19.9371794,39.9183674 19.2244898,39.2056778 19.2244898,38.3265306 L19.2244898,38.3265306 L19.2244898,14.4489796 C19.2244898,12.6906853 20.649869,11.2653061 22.4081633,11.2653061 L22.4081633,11.2653061 Z M39.9183674,1.71428567 C41.6766617,1.71428567 43.1020409,3.13966484 43.1020409,4.89795915 L43.1020409,4.89795915 L43.1020409,38.3265306 C43.1020409,39.2056778 42.3893513,39.9183674 41.5102041,39.9183674 L41.5102041,39.9183674 L35.1428572,39.9183674 C34.26371,39.9183674 33.5510204,39.2056778 33.5510204,38.3265306 L33.5510204,38.3265306 L33.5510204,4.89795915 C33.5510204,3.13966484 34.9763996,1.71428567 36.7346939,1.71428567 L36.7346939,1.71428567 Z"
                                  id="Combined-Shape"
                                  fill="currentColor"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <button
            className="all__courses__button__seeMore"
            disabled={
              Application.data.currencyData.currenciesList.length + 1 ===
              showLength
            }
            onClick={() => {
              if (
                Application.data.currencyData.currenciesList.length + 1 ===
                showLength
              ) {
                alert(1);
              } else {
                setShowLength(showLength + 10);
              }
            }}
          >
            მეტის ჩვენება
          </button>
        </div>
      </div>
    </>
  );
}
