import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") return;

  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const propsH1 = useFadeIn(1, 2);
  const propsP = useFadeIn(3, 5);
  return (
    <div className="App">
      <h1 {...propsH1}>useFadeIn</h1>
      <p {...propsP}>Test</p>
    </div>
  );
};

export default App;

