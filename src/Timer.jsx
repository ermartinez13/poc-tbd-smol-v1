import React, { useState, useEffect } from "react";

// Timer component that takes a microtask and a function updateMicroTask as props
const Timer = ({ microTask, updateMicroTask }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Function to handle start button
  const handleStart = () => {
    setIsActive(true);
  };

  // Function to handle stop button
  const handleStop = () => {
    setIsActive(false);
    updateMicroTask(microTask.id, timeElapsed);
  };

  // Function to handle reset button
  const handleReset = () => {
    setTimeElapsed(0);
  };

  // Function to handle extend button
  const handleExtend = () => {
    updateMicroTask(microTask.id, timeElapsed, microTask.timeBudget * 2);
  };

  // Function to handle complete button
  const handleComplete = () => {
    updateMicroTask(microTask.id, timeElapsed, microTask.timeBudget, "done");
  };

  // useEffect to handle timer increment when isActive is true
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeElapsed((timeElapsed) => timeElapsed + 1);
      }, 1000);
    } else if (!isActive && timeElapsed !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeElapsed]);

  return (
    <div id="timer">
      <h3>{microTask.name}</h3>
      <p>
        {Math.floor(timeElapsed / 60)}:{timeElapsed % 60}
      </p>
      <button
        onClick={handleStart}
        disabled={!isActive && microTask.status === "done"}
      >
        Start
      </button>
      <button onClick={handleStop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={handleReset} disabled={isActive || timeElapsed === 0}>
        Reset
      </button>
      <button onClick={handleExtend} disabled={!isActive}>
        Extend
      </button>
      <button onClick={handleComplete} disabled={microTask.status === "done"}>
        Complete
      </button>
    </div>
  );
};

export default Timer;
