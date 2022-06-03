import React, { useState } from "react";

import "./Style.css"

function main(taketime) {
  var mil = Math.floor((taketime % 1000) / 100),
      sec = Math.floor((taketime / 1000) % 60),
      min = Math.floor((taketime / (1000 * 60)) % 60),
      hou = Math.floor((taketime / (1000 * 60 * 60)) % 24);

      hou = hou < 10 ? "0" + hou : hou;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

  return hou + ":" + min + ":" + sec + "." + mil +mil;
}

const Stopwatch = () => {
  const [time, setTime] = useState(1000);
  let [val, setval] = useState(null);
  const [check, setCheck] = useState(true);

  const start = () => {
    if (!val) {
      
        clearInterval(val);
      
        let id = setInterval(() => {
          setTime((prev) => prev + 1000);
        }, 1000);
        setval(id);
     
      setCheck(false);
    }
  };

  const stop = () => {
    clearInterval(val);
    setval(null);
    setCheck(true);
  };
  const reset = () => {
    clearInterval(val);
    setTime(0);
  };
  
  return (
    <div className="main-stop">
      <h2>{main(time)}</h2>
      {check ? (
        <button onClick={start}>START</button>
      ) : (
        <button onClick={stop}>STOP</button>
      )}

      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Stopwatch;