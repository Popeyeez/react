"use client";
import { Button } from "../component";
import { useState } from "react";

const Task2 = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(true);
  const [todos, setTodos] = useState([]);
  const handleOnClick = () => {
    setTodos([...todos, inputValue]);
  };

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
    setCount(event.target.value.length);
  };

  return (
    <div className="">
      <input
        value={inputValue}
        type="text"
        placeholder="add text"
        onChange={handleOnchange}
      />

      <Button onClick={handleOnClick}>add</Button>

      {hide && <div>{inputValue}</div>}
      <div>{"Character: " + count}</div>

      <Button onClick={() => setHide(!hide)}>Show/Hide</Button>
    </div>
  );
};
export default Task2;
