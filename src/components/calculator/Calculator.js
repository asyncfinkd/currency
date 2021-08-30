import React from "react";

export default function Calculator({ calculator }) {
  return (
    <>
      <div
        className={
          calculator ? "container__calculator open" : "container__calculator"
        }
      >
        <div
          className={
            calculator ? "calculator__wrapper open" : "calculator__wrapper"
          }
        ></div>
      </div>
    </>
  );
}
