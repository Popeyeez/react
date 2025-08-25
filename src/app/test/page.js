"use client";

import { Input, Button, Checkbox, Task } from "../component";
import { useState } from "react";

// const TodoPage = () => {
//   // array

//   const [todos, setTodos] = useState([]);

//   const [inputValue, setInputValue] = useState("");

//   const handleOnchange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleOnClick = () => {
//     setTodos([...todos, { title: inputValue, isDone: true }]);
//     setInputValue("");
//     // setInputValue("");
//   };
//   // 1. input value -> onChange;
//   // 2. button click -> add todo;

//   return (
//     <div>
//       <input
//         value={inputValue}
//         type="text"
//         placeholder="add todo"
//         onChange={handleOnchange}
//       />
//       {todos.map((todo, index) => (
//         <div className="flex gap-10" key={index + Math.random()}>
//           <input type="checkbox" defaultChecked={todo.isDone} />
//           <div>{todo.title}</div>
//         </div>
//       ))}
//       <Button onClick={handleOnClick}>add</Button>
//     </div>
//   );
// };

// export default TodoPage;

const MediumTodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    console.log("add todo", todos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((el, i) => index !== i);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input onChange={handleOnChange} type="text" placeholder="type ...." />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo} <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default MediumTodoList;
