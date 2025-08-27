import { useState } from "react";

export const Task = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted);
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((t, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="w-[300px] h-[60px] bg-slate-300 rounded-md flex items-center gap-2 text-black p-3">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />

      <p className={isCompleted ? "line-through" : ""}>{props.title}</p>

      {isCompleted ? (
        <button
          onClick={() => handleDeleteTodo(index)}
          className="p-1 bg-red-200 text-red-500 rounded-xl"
        >
          Delete
        </button>
      ) : (
        <button
          className="p-1 bg-blue-200 text-blue-500 rounded-xl"
          onClick={() => setIsCompleted(true)}
        >
          Completed
        </button>
      )}
    </div>
  );
};
