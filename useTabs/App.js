import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "Content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "Content of the Section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
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

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
