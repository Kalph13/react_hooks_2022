export const useClick = (onClick) => {
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