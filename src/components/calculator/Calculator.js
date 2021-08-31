import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/Application/ApplicationContext";

export default function Calculator({ calculator, calculatorHandle }) {
  const { Application } = useContext(ApplicationContext);
  const [showWhereSelect, setShowWhereSelect] = React.useState(false);
  const [showSecondSelect, setShowSecondSelect] = React.useState(false);
  const [whereSelectValue, setWhereSelectValue] = React.useState([
    { viewCcy: "USD", name: "აშშ დოლარი" },
  ]);
  const [sortedWhereSelectValue, setSortedWhereSelectValue] = React.useState(
    []
  );
  const [secondSelectValue, setSecondSelectValue] = React.useState([
    {
      viewCcy: "GEL",
      name: "ლარი",
    },
  ]);
  const [sortedSecondSelectValue, setSortedSecondSelectValue] = React.useState(
    []
  );
  const [data, setData] = React.useState(
    Application.data.currencyData.currenciesList
  );
  const [whereInput, setWhereInput] = React.useState("");
  const [secondInput, setSecondInput] = React.useState("");
  useEffect(() => {
    data.push({
      ccy: "GEL",
      viewCcy: "GEL",
      name: "ლარი",
      buyRate: "0",
      currentRate: "0",
      dgtlBuyRate: "0",
      dgtlSellRate: "0",
      sellRate: "0",
      difference: "0",
    });
    console.log(data);
  }, []);
  const convertationCurrency = () => {
    if (secondSelectValue[0].viewCcy === whereSelectValue[0].viewCcy) {
      setSecondInput(whereInput);
    } else {
      data.map((item) => {
        if (whereSelectValue[0].viewCcy === "GEL") {
          setSortedWhereSelectValue(item);
          let a =
            (whereInput / sortedSecondSelectValue.dgtlSellRate) *
            sortedSecondSelectValue.rateWeight;
          let toStringA = a.toString();
          let splitedA = toStringA.split(".");
          let inputA;
          if (splitedA.length > 1) {
            inputA = splitedA[0] + "." + splitedA[1].slice(0, 2);
          } else {
            inputA = splitedA[0];
          }
          setSecondInput(inputA);
        } else {
          if (item.viewCcy === whereSelectValue[0].viewCcy) {
            setSortedWhereSelectValue(item);
            if (sortedSecondSelectValue.viewCcy != "GEL") {
              let a = (whereInput * item.dgtlBuyRate) / item.rateWeight;
              let b =
                (a / sortedSecondSelectValue.dgtlSellRate) *
                sortedSecondSelectValue.rateWeight;
              let toStringB = b.toString();
              let splitedB = toStringB.split(".");
              let inputB;
              if (splitedB.length > 1) {
                inputB = splitedB[0] + "." + splitedB[1].slice(0, 2);
              } else {
                inputB = splitedB[0];
              }
              setSecondInput(inputB);
            } else {
              let a = whereInput * item.dgtlBuyRate;
              let toStringA = a.toString();
              let splitedA = toStringA.split(".");
              let inputA;
              if (splitedA.length > 1) {
                inputA = splitedA[0] + "." + splitedA[1].slice(0, 2);
              } else {
                inputA = splitedA[0];
              }
              setSecondInput(inputA);
            }
          }
        }
        if (item.viewCcy === secondSelectValue[0].viewCcy) {
          setSortedSecondSelectValue(item);
        }
      });
    }
  };
  useEffect(() => {
    convertationCurrency();
  }, [
    whereInput,
    secondInput,
    whereSelectValue,
    secondSelectValue,
    sortedSecondSelectValue,
    sortedWhereSelectValue,
  ]);
  return (
    <>
      <div is-active={calculator && ""} className="container__calculator">
        <div className="calculator__wrapper" onClick={calculatorHandle}></div>
        <div className="calculator__container">
          <div className="calculator__content">
            <div className="calculator__header">
              <div className="calculator__header__title__wrapper">
                <span>კალკულატორი</span>
              </div>
              <div className="calculator__header__close__button">
                <button onClick={calculatorHandle}>
                  <div className="container__calculator__closeButton">
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="icons-48-system-close-"
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
                          d="M44.9024631,41.9131035 L26.9816749,24 L44.9024631,6.08689652 C45.727952,5.26140765 45.727952,3.92302577 44.9024631,3.09753691 C44.0769742,2.27204804 42.7385923,2.27204804 41.9131035,3.09753691 L24,21.0183251 L6.08689652,3.09753691 C5.26140765,2.27204806 3.92302578,2.27204807 3.09753693,3.09753693 C2.27204807,3.92302578 2.27204806,5.26140765 3.09753691,6.08689652 L21.0183251,24 L3.09753691,41.9131035 C2.27204804,42.7385923 2.27204804,44.0769742 3.09753691,44.9024631 C3.92302577,45.727952 5.26140765,45.727952 6.08689652,44.9024631 L24,26.9816749 L41.9131035,44.9024631 C42.7385923,45.727952 44.0769742,45.727952 44.9024631,44.9024631 C45.727952,44.0769742 45.727952,42.7385923 44.9024631,41.9131035 Z"
                          id="system-:-close-"
                          fill="currentColor"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="calculator__bottomSection">
              <div className="calculator__bottomSectionContent">
                <div className="calculator__bottomSection__content">
                  <select>
                    <option>საბითუმო კურსი</option>
                  </select>
                  <span className="calculator__bottomSection__whereSpan">
                    საიდან
                  </span>
                  <div className="calculator__bottomSection__whereContainer">
                    <input
                      type="text"
                      placeholder="თანხა"
                      value={whereInput}
                      onChange={(e) => setWhereInput(e.target.value)}
                    />
                    <div
                      className="calculator__bottomSection__selectBox"
                      onClick={() => {
                        setShowWhereSelect(!showWhereSelect);
                        setShowSecondSelect(false);
                      }}
                    >
                      <div className="calculator__bottomSection__selectBox__Wrapper">
                        <div className="calculator__bottomSection__selectBox__WrapperContainer">
                          <div className="calculator__bottomSection__selectBox__WrapperContainerFlex">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span className="calculator__bottomSection__selectBox__WrapperContainerFlexSpan">
                                ვალუტა
                              </span>
                              <span className="calculator__bottomSection__selectBox__WrapperContainerFlexSpanCourse">
                                {whereSelectValue[0].name}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <div className="calculator__logoWrapper">
                                <div className="calculator__logoWrapperContent">
                                  <span className="calculator__logoWrapperContentSpan">
                                    {whereSelectValue[0].viewCcy}
                                  </span>
                                </div>
                              </div>
                              <div
                                className="calculator__selectBoxIcon"
                                is-active={showWhereSelect && "true"}
                              >
                                <svg
                                  width="12"
                                  height="12px"
                                  viewBox="0 0 48 48"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="icons-48-system-chevron_down"
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
                                      d="M23.3632653,35.4612245 C22.8893704,35.4599269 22.4338561,35.2777212 22.0897959,34.9518368 L2.32555098,16.4865306 C1.70987893,15.7544649 1.73060236,14.6798812 2.37404202,13.9720976 C3.01748169,13.264314 4.0852338,13.1415745 4.87248976,13.6848979 L23.3632653,31.0040816 L41.8031021,13.6848979 C42.2817601,13.1157489 43.0472232,12.8761335 43.7649709,13.0707676 C44.4827185,13.2654018 45.022263,13.8589007 45.1478142,14.5918953 C45.2733654,15.3248899 44.9620979,16.0641205 44.3500409,16.4865306 L24.6367347,34.9518368 C24.2926745,35.2777212 23.8371602,35.4599269 23.3632653,35.4612245 L23.3632653,35.4612245 Z"
                                      id="Mask"
                                      fill="currentColor"
                                      fill-rule="nonzero"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      isActive={showWhereSelect && "true"}
                      className="calculator__suggestions"
                      id="suggestions"
                    >
                      <div className="calculator__suggestions__content">
                        {data.map((item) => {
                          return (
                            <>
                              <div
                                className="calculator__suggestions__section"
                                onClick={() => {
                                  const empty = (arr) => (arr.length = []);
                                  empty(whereSelectValue);
                                  setWhereSelectValue([
                                    {
                                      viewCcy: item.viewCcy,
                                      name: item.name,
                                    },
                                  ]);
                                  setShowWhereSelect(false);
                                }}
                              >
                                <div>
                                  <span className="calculator__suggestions__sectionSpan">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <div className="calculator__logoWrapperContent">
                                    <span className="calculator__logoWrapperContentSpan">
                                      {item.viewCcy}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div
                    className="calculator__changeButton"
                    onClick={() => {
                      setWhereSelectValue(secondSelectValue);
                      setSecondSelectValue(whereSelectValue);
                    }}
                  >
                    <div className="calculator__changeButtonContent">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          color: "white",
                        }}
                      >
                        <svg
                          width="8px"
                          height="8px"
                          viewBox="0 0 48 48"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: "rotate(180deg)" }}
                        >
                          <g
                            id="icons-48-system-chevron_down"
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
                              d="M23.3632653,35.4612245 C22.8893704,35.4599269 22.4338561,35.2777212 22.0897959,34.9518368 L2.32555098,16.4865306 C1.70987893,15.7544649 1.73060236,14.6798812 2.37404202,13.9720976 C3.01748169,13.264314 4.0852338,13.1415745 4.87248976,13.6848979 L23.3632653,31.0040816 L41.8031021,13.6848979 C42.2817601,13.1157489 43.0472232,12.8761335 43.7649709,13.0707676 C44.4827185,13.2654018 45.022263,13.8589007 45.1478142,14.5918953 C45.2733654,15.3248899 44.9620979,16.0641205 44.3500409,16.4865306 L24.6367347,34.9518368 C24.2926745,35.2777212 23.8371602,35.4599269 23.3632653,35.4612245 L23.3632653,35.4612245 Z"
                              id="Mask"
                              fill="currentColor"
                              fill-rule="nonzero"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          width="8px"
                          height="8px"
                          viewBox="0 0 48 48"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="icons-48-system-chevron_down"
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
                              d="M23.3632653,35.4612245 C22.8893704,35.4599269 22.4338561,35.2777212 22.0897959,34.9518368 L2.32555098,16.4865306 C1.70987893,15.7544649 1.73060236,14.6798812 2.37404202,13.9720976 C3.01748169,13.264314 4.0852338,13.1415745 4.87248976,13.6848979 L23.3632653,31.0040816 L41.8031021,13.6848979 C42.2817601,13.1157489 43.0472232,12.8761335 43.7649709,13.0707676 C44.4827185,13.2654018 45.022263,13.8589007 45.1478142,14.5918953 C45.2733654,15.3248899 44.9620979,16.0641205 44.3500409,16.4865306 L24.6367347,34.9518368 C24.2926745,35.2777212 23.8371602,35.4599269 23.3632653,35.4612245 L23.3632653,35.4612245 Z"
                              id="Mask"
                              fill="currentColor"
                              fill-rule="nonzero"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span
                    className="calculator__bottomSection__whereSpan"
                    style={{ marginTop: "4px" }}
                  >
                    სად
                  </span>
                  <div className="calculator__bottomSection__whereContainer">
                    <input
                      type="text"
                      placeholder="თანხა"
                      value={secondInput}
                      onChange={(e) => setSecondInput(e.target.value)}
                    />
                    <div
                      className="calculator__bottomSection__selectBox"
                      onClick={() => {
                        setShowSecondSelect(!showSecondSelect);
                        setShowWhereSelect(false);
                      }}
                    >
                      <div className="calculator__bottomSection__selectBox__Wrapper">
                        <div className="calculator__bottomSection__selectBox__WrapperContainer">
                          <div className="calculator__bottomSection__selectBox__WrapperContainerFlex">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span className="calculator__bottomSection__selectBox__WrapperContainerFlexSpan">
                                ვალუტა
                              </span>
                              <span className="calculator__bottomSection__selectBox__WrapperContainerFlexSpanCourse">
                                {secondSelectValue[0].name}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <div className="calculator__logoWrapper">
                                <div className="calculator__logoWrapperContent">
                                  <span className="calculator__logoWrapperContentSpan">
                                    {secondSelectValue[0].viewCcy}
                                  </span>
                                </div>
                              </div>
                              <div
                                className="calculator__selectBoxIcon"
                                is-active={showSecondSelect && "true"}
                              >
                                <svg
                                  width="12"
                                  height="12px"
                                  viewBox="0 0 48 48"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="icons-48-system-chevron_down"
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
                                      d="M23.3632653,35.4612245 C22.8893704,35.4599269 22.4338561,35.2777212 22.0897959,34.9518368 L2.32555098,16.4865306 C1.70987893,15.7544649 1.73060236,14.6798812 2.37404202,13.9720976 C3.01748169,13.264314 4.0852338,13.1415745 4.87248976,13.6848979 L23.3632653,31.0040816 L41.8031021,13.6848979 C42.2817601,13.1157489 43.0472232,12.8761335 43.7649709,13.0707676 C44.4827185,13.2654018 45.022263,13.8589007 45.1478142,14.5918953 C45.2733654,15.3248899 44.9620979,16.0641205 44.3500409,16.4865306 L24.6367347,34.9518368 C24.2926745,35.2777212 23.8371602,35.4599269 23.3632653,35.4612245 L23.3632653,35.4612245 Z"
                                      id="Mask"
                                      fill="currentColor"
                                      fill-rule="nonzero"
                                    ></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      isActive={showSecondSelect && "true"}
                      className={
                        showSecondSelect
                          ? "calculator__suggestions secondBox"
                          : "calculator__suggestions"
                      }
                      id="suggestions"
                    >
                      <div className="calculator__suggestions__content">
                        {data.map((item) => {
                          return (
                            <>
                              <div
                                className="calculator__suggestions__section"
                                onClick={() => {
                                  const empty = (arr) => (arr.length = []);
                                  empty(secondSelectValue);
                                  setSecondSelectValue([
                                    {
                                      viewCcy: item.viewCcy,
                                      name: item.name,
                                    },
                                  ]);
                                  setShowSecondSelect(false);
                                }}
                              >
                                <div>
                                  <span className="calculator__suggestions__sectionSpan">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <div className="calculator__logoWrapperContent">
                                    <span className="calculator__logoWrapperContentSpan">
                                      {item.viewCcy}
                                    </span>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
