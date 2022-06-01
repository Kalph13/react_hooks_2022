import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (!onBefore || typeof onBefore !== "function") return;

  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const messageBeforeLeave = () => console.log("Please Don't Leave.");
  useBeforeLeave(messageBeforeLeave);

  return (
    <div className="App">
      <h1>useBeforeLeave</h1>
    </div>
  );
};

export default App;

