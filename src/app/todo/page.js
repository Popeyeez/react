"use client";
import { Input, Button, Checkbox, Task } from "../component";
import { useState } from "react";
const Todo = () => {
  const task1 = {
    taskName: "false",
    isCompleted: false,
  };
  const [arr, setArr] = useState(0);

  return (
    <div>
      <div className="bg-gray-200 h-screen flex justify-center pt-[60]">
        <div className="w-[377] h-fit bg-white shadow-2xl">
          <div className="text-2xl text-center pt-[24]">To-Do list</div>
          <div className="p-3 flex gap-2">
            <Input />
            <Button onClick={() => setArr(arr + 1)}>Add</Button>
          </div>
          <div className="flex gap-2 items-center p-3">
            {arr}

            <Button onClick={() => setArr(arr + 1)}>All </Button>
            <Button onClick={() => setArr(arr + 1)}>Active</Button>
            <Button onClick={() => setArr(arr + 1)}>Completed</Button>
          </div>
          <div className="pl-3 flex flex-col gap-2">
            <Task taskName={task1.taskName} isCompleted={task1.isCompleted} />
          </div>
          <div className="p-3 flex flex-col gap-4 items-center">
            <h3 className="text-[#6B7280] ">No tasks yet. Add one above!</h3>
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
