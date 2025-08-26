"use client";
import { Input, Button, Task } from "../component";
import { useState } from "react";

const Todo = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    const newTask = {
      taskName: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  return (
    <div>
      <div className="bg-gray-200 h-screen flex justify-center pt-[60px]">
        <div className="w-[377px] h-fit bg-white shadow-2xl rounded-xl">
          <div className="text-2xl text-center pt-[24px]">To-Do list</div>

          <div className="p-3 flex gap-2">
            <Input
              value={taskName}
              onChange={(event) => setTaskName(event.target.value)}
              placeholder="Add a task..."
            />
            <Button onClick={handleAddTask}>Add</Button>
          </div>

          <div className="flex gap-2 items-center p-3">
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
          </div>

          <div className="pl-3 flex flex-col gap-2">
            {tasks.map((t, index) => (
              <Task
                key={index}
                taskName={t.taskName}
                isCompleted={t.isCompleted}
              />
            ))}
          </div>

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
