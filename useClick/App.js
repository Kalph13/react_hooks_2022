import { useState, useEffect, useRef } from "react";

/* Select a certain component using useRef() → Similar to querySelector() */

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    /* Remove the eventListener when unmount */
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  });
  return element;
};

export default function App() {
  /* useClick returns 'element' → const title = const element = h1 ref */
  /* If 'return element' doesn't exist, it doesn't work */
  const title = useClick(() => console.log("Hello!"));
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
