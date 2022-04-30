export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    /* Return a callback function for the state change */
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };