import { useState } from "react";

export default function InputBoxWithHook() {
  const [inputValue, setInputValue] = useState("안녕");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnClick = () => {
    alert(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange} />
      <button onClick={handleOnClick}>확인</button>
    </div>
  );
}
