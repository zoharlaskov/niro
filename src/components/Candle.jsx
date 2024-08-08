import React from "react";
import "./Candle.css";
import candleGif from "../assets/candle.gif.png";

function Candle() {
  return (
    <div className="candle-container">
      <img src={candleGif} alt="Candle" />
      <h4>לזכרה</h4>
    </div>
  );
}

export default Candle;
