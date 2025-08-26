"use client";
import { Input, Button, Task } from "../component";
import { useState } from "react";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { title: inputValue, isDone: false }]);
  };

  const [filterStatus, setFilterStatus] = useState("all");
  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };
  const handleOnCheckBox = (event, index) => {
    const newTodos = todos.map((t, i) => {
      if (i === index) t.isDone = event.target.checked;
      return t;
    });
    setTodos(newTodos);
  };
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((t, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <div className="bg-gray-200 h-screen flex justify-center pt-[60px]">
        <div className="w-[377px] h-fit bg-white shadow-2xl rounded-xl">
          <div className="text-2xl text-center pt-[24px]">To-Do list</div>

          <div className="p-3 flex gap-2">
            <Input
              onChange={handleOnChange}
              type="text"
              placeholder="Add a task..."
            />
            <Button onClick={handleAddTodo}>Add</Button>
          </div>

          <div className="flex gap-2 items-center p-3">
            <Button
              onClick={() => handleFilterStatus("all")}
              className={` ${
                filterStatus === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              All
            </Button>

            <Button
              onClick={() => handleFilterStatus("Active")}
              className={` ${
                filterStatus === "Active"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Active
            </Button>
            <Button
              onClick={() => handleFilterStatus("Completed")}
              className={` ${
                filterStatus === "Completed"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Completed
            </Button>
          </div>

          {todos.map((t, index) => (
            <div key={index} className="pl-3 flex gap-2">
              <input
                onChange={(event) => handleOnCheckBox(event, index)}
                type="checkbox"
                defaultChecked={t.isDone}
              />
              <p>{t.title}</p>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          ))}

          <div className="p-3 flex flex-col gap-4 items-center">
            <h3 className="text-[#6B7280] text-center">
              No tasks yet. Add one above!
            </h3>
            <p className="flex gap-2">
              Powered by
              <a className="text-[#3B73ED]" href="">
                Pinecone academy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
