import React, { useState, useEffect } from "react";

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(60); // Initial time set to 60 seconds
  const [timerStatus, setTimerStatus] = useState("stopped");

  useEffect(() => {
    let interval = null;
    if (timerStatus === "running" && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timerStatus === "stopped") {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerStatus, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimerStatus("stopped");
    }
  }, [timeRemaining]);

  const handleStart = () => {
    setTimerStatus("running");
  };

  const handleStop = () => {
    setTimerStatus("stopped");
  };

  const handleInput = (event) => {
    setTimeRemaining(parseInt(event.target.value));
  };

  return (
    <div>
      <div>Time Remaining: {timeRemaining}</div>
      <input type="number" onChange={handleInput} value={timeRemaining} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
