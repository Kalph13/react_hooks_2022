export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    /* Run updateTitle everytime the 'title' is changed */
    useEffect(updateTitle, [title]);
    return setTitle;
  };