import React, { useEffect, useState } from "react";
import { ApplicationContext } from "../../context/Application/ApplicationContext";
import Alert from "@material-ui/lab/Alert";
// import { makeStyles } from "@material-ui/core/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Calculator from "../../components/calculator/Calculator";
import AppPagesUtils from "./utils/AppPagesUtils";
import AppPagesTable from "./utils/AppPagesTable";

export default function AppPages() {
  const { Application } = React.useContext(ApplicationContext);
  const [calculator, setCalculator] = useState(false);
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
  const [search, setSearch] = useState("");
  const [data, setData] = useState(
    Application.data.currencyData.currenciesList
  );
  React.useEffect(() => {
    if (modal) {
      setTimeout(() => {
        setModal(false);
      }, 2000);
    }
  });
  const identificationSearch = () => {
    if (search.length == 0) {
      setData(Application.data.currencyData.currenciesList);
    } else {
      setData(
        Application.data.currencyData.currenciesList.filter((val) => {
          if (search == "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
      );
    }
  };
  useEffect(() => {
    identificationSearch();
  }, [search]);

  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>ვალუტის კურსი</title>
      </Helmet>
      <Calculator
        calculator={calculator}
        calculatorHandle={() => {
          setCalculator(!calculator);
          document.body.style.overflowY = "visible";
        }}
      />
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
                    onClick={() => {
                      setCalculator(!calculator);
                      document.body.style.overflowY = "hidden";
                    }}
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
                        <AppPagesUtils
                          ccy={ccy}
                          name={name}
                          currentRate={currentRate}
                          dgtlBuyRate={dgtlBuyRate}
                          dgtlSellRate={dgtlSellRate}
                          handle={() => setModal(true)}
                          difference={item.difference}
                        />
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
          <input
            type="text"
            placeholder="ვალუტის ძებნა"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
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
              {data &&
                data.slice(0, showLength).map((item) => {
                  return (
                    <>
                      <AppPagesTable
                        viewCcy={item.viewCcy}
                        name={item.name}
                        rateWeight={item.rateWeight}
                        currentRate={item.currentRate}
                        buyRate={item.buyRate}
                        sellRate={item.sellRate}
                        handle={() => setModal(true)}
                        difference={item.difference}
                      />
                    </>
                  );
                })}
            </div>
          </div>
          <button
            className="all__courses__button__seeMore"
            disabled={data.length === showLength || data.length < showLength}
            onClick={() => {
              if (data.length != showLength) {
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
