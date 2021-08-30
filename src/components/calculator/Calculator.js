import React from "react";

export default function Calculator({ calculator, calculatorHandle }) {
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
                    <input type="text" placeholder="თანხა" />
                    <div className="calculator__bottomSection__selectBox">
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
                                აშშ დოლარი
                              </span>
                            </div>
                            <div>qwe</div>
                          </div>
                        </div>
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
