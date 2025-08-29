"use client";
import { In, Btn } from "../component";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, { title: inputValue, isDone: false, id: uuidv4() }]);
      setInputValue("");
    }
  };

  const [filterStatus, setFilterStatus] = useState("all");
  const handleFilterStatus = (status) => {
    setFilterStatus(status);
  };
  const handleOnCheckBox = (event, index) => {
    const newTodos = todos.map((t) => {
      if (t.id === index) t.isDone = event.target.checked;
      return t;
    });
    setTodos(newTodos);
  };
  const handleDeleteTodo = (index) => {
    alert("Delete?");
    const newTodos = todos.filter((t) => t.id !== index);
    setTodos(newTodos);
  };
  const handleUpdateTodo = (index) => {
    <input />;
  };

  const completeDeleteTodo = () => {
    alert("Delete?");
    const newTodos = todos.filter((t) => {
      if (t.isDone == false) return t;
    });

    setTodos(newTodos);
  };
  const filteredTodos = todos.filter((t) => {
    if (filterStatus === "all") return true;
    if (filterStatus === "Active") return !t.isDone;
    return t.isDone;
  });
  const completedTodo = todos.filter((t) => {
    if (t.isDone == true) return t;
  });
  return (
    <div>
      <div className="bg-gray-200 h-screen flex justify-center pt-[60px]">
        <div className="w-[377px] h-fit bg-white shadow-2xl rounded-xl">
          <div className="text-2xl text-center pt-[24px]">To-Do list</div>

          <div className="p-3 flex gap-2">
            <In
              value={inputValue}
              onChange={handleOnChange}
              type="text"
              placeholder="Add a task..."
            />
            <Btn onClick={handleAddTodo}>Add</Btn>
          </div>

          <div className="flex gap-2 items-center p-3">
            <Btn
              onClick={() => handleFilterStatus("all")}
              className={` ${
                filterStatus === "all"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              All
            </Btn>

            <Btn
              onClick={() => handleFilterStatus("Active")}
              className={` ${
                filterStatus === "Active"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Active
            </Btn>
            <Btn
              onClick={() => handleFilterStatus("Completed")}
              className={` ${
                filterStatus === "Completed"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Completed
            </Btn>
          </div>
          <div className="flex gap-3 flex-col items-center">
            {filteredTodos.map((t, index) => (
              <div
                key={t.id}
                className="pl-3 gap-2 w-[345px] h-[62px] bg-[#F3F4F6] rounded-md flex items-center justify-between p-5"
              >
                <div className="flex gap-3">
                  <input
                    onChange={(event) => handleOnCheckBox(event, t.id)}
                    type="checkbox"
                    checked={t.isDone}
                  />
                  <p className={t.isDone ? "line-through" : ""}>{t.title}</p>
                </div>
                <div className="flex items-center">
                  {t.isDone ? (
                    <button
                      onClick={() => handleDeleteTodo(t.id)}
                      className="p-1 bg-red-200 text-red-500 rounded-md mr-4"
                    >
                      Delete
                    </button>
                  ) : (
                    <button
                      className="p-1 bg-blue-200 text-blue-500 rounded-md "
                      onClick={() => handleUpdateTodo(index)}
                    >
                      Completed
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {todos.length < 1 ? (
            <h3 className="text-[#6B7280] text-center mt-2">
              No tasks yet. Add one above!
            </h3>
          ) : (
            <h3 className="flex items-center ml-6 mt-3 text-[#6B7280]">
              {completedTodo.length} of {todos.length}
              <button
                onClick={() => completeDeleteTodo()}
                className="text-red-500 ml-44"
              >
                Clear completed
              </button>
            </h3>
          )}
          {/* {condition ? (true) : (false)} */}

          <div className="p-3 flex flex-col gap-4 items-center">
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
