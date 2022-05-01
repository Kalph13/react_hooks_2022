import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  /* Run updateTitle everytime the 'title' is changed */
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  /* titleUpdater = useTitle w/initialTitle "...Loading..." */
  const titleUpdater = useTitle("Loading...");
  /* Change the title to Home after 3s (Check at https://j011x7.csb.app/) */
  setTimeout(() => titleUpdater("Home"), 3000);
  return <div className="App"></div>;
}
