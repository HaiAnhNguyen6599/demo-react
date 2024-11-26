import React, { useState, useEffect } from "react";

const Timer = () => {
  // State
  const [timeInput, setTimeInput] = useState(0); // input time
  const [remainingTime, setRemainingTime] = useState(0); // remaining time
  const [isRunning, setIsRunning] = useState(false); // trang thai dang chay -> KHONG CHAY

  // xu ly dem nguoc
  useEffect(() => {
    let timer = null;

    // Bat dau bo dem neu dang chay va con thoi gian
    // Neu dang chay va thoi gian con lai > 0 thi -1s
    if (isRunning && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false);
      alert("Time's up");
    }

    return () => clearInterval(timer);
  }, [isRunning, remainingTime]);

  // Bat dau bo dem nguoc
  const handleStart = () => {
    if (timeInput > 0) {
      setRemainingTime(timeInput);
      setIsRunning(true);
    }
  };

  // Stop
  const handleStop = () => {
    setIsRunning(false);
  };

  // Reset time\
  const handleReset = () => {
    setIsRunning(0);
    setRemainingTime(0);
    setTimeInput(0);
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <input
        type="number"
        value={timeInput}
        onChange={(e) => setTimeInput(Number(e.target.value))}
        placeholder="Enter second"
        disabled={isRunning} // khong cho thay doi neu dang chay
      ></input>
      {/* // Vo hieu khi dang coutdown hoac input 0 */}
      <div>
        <button onClick={handleStart} disabled={isRunning || timeInput <= 0}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h2>Remaining Time: {remainingTime} second</h2>
    </div>
  );
};

export default Timer;
