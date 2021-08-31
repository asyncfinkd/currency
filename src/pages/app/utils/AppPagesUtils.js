import React from "react";

export default function AppPagesUtils({
  ccy,
  name,
  currentRate,
  dgtlBuyRate,
  dgtlSellRate,
  handle,
  difference,
}) {
  const [active, setActive] = React.useState(false);

  // const renderSpan = () => {
  //   let toStringDifference = difference.toString();
  //   // if (toStringDifference[0] == "-") {
  //   setActive(true);
  //   // }
  // };
  React.useEffect(() => {
    let toStringPoint = difference.toString();
    if (toStringPoint[0] == "-") {
      setActive(true);
    }
  }, []);
  return (
    <>
      <div className="container-card">
        <div className="card__container">
          <div className="card__head">
            <div
              className={
                active
                  ? "card__currency active__card__currency"
                  : "card__currency"
              }
            >
              {ccy}
            </div>
            <span className="card__name">{name}</span>
            <button className="card__button">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handle}
              >
                <g
                  id="icons-48-general-chart-fill"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <rect id="shape" x="0" y="0" width="48" height="48"></rect>
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
                  <div className="bank__rate">{currentRate}</div>
                  <div
                    className={
                      active ? "diff__rate actived__diff__rate" : "diff__rate"
                    }
                  >
                    <svg
                      width="48px"
                      height="48px"
                      viewBox="0 0 48 48"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className={active && "svg__diff__rate__active"}
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
                    <span>
                      {active
                        ? difference.toString().slice(1, difference.length)
                        : difference}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item__containerDisplay">
              <div className="item">
                <div class="vertical-divisor"></div>
              </div>
              <div className="item">
                <span className="item__courseSPAN">საბითუმო კურსი</span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div className="rates direction:column">
                    <div className="label">ყიდვა</div>
                    <div className="bank__rate" style={{ fontWeight: "500" }}>
                      {dgtlBuyRate}0
                    </div>
                  </div>
                  <div
                    className="rates direction:column"
                    style={{ marginLeft: "64px" }}
                  >
                    <div className="label">გაყიდვა</div>
                    <div className="bank__rate" style={{ fontWeight: "500" }}>
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
              <span className="item__courseSPAN">საბითუმო კურსი</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="rates direction:column">
                  <div className="label">ყიდვა</div>
                  <div className="bank__rate" style={{ fontWeight: "500" }}>
                    {dgtlBuyRate}0
                  </div>
                </div>
                <div
                  className="rates direction:column"
                  style={{ marginLeft: "64px" }}
                >
                  <div className="label">გაყიდვა</div>
                  <div className="bank__rate" style={{ fontWeight: "500" }}>
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
}
