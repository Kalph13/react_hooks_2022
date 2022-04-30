import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  /* maxLen: You cannot write an input longer than 10 characters */
  const maxLen = (value) => value.length <= 10;
  /* exclAt: You cannot write '@' in the input */
  const exclAt = (value) => !value.includes("@");
  const name = useInput("Mr.", exclAt);
  /* You can use {...name} instead of value={name.value} onChange={name.onChange} */
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
