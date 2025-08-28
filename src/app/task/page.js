"use client";
import { Btn } from "../component";
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

      <Btn onClick={handleOnClick}>add</Btn>

      {hide && <div>{inputValue}</div>}
      <div>{"Character: " + count}</div>

      <Btn onClick={() => setHide(!hide)}>Show/Hide</Btn>
    </div>
  );
};
export default Task2;
