import { Input, Button, Checkbox, Task } from "../component";

const Todo = () => {
  const task = {
    taskName: "Okeeey",
    isCompleted: false,
  };
  const task1 = {
    taskName: "Nooo",
    isCompleted: true,
  };
  return (
    <div className="bg-gray-200 h-screen flex justify-center pt-[60]">
      <div className="w-[377] h-[450] bg-white">
        <div className="text-2xl text-center pt-[24]">To-Do list</div>
        <div className="p-3 flex gap-2">
          <Input />
          <Button button="Add" />
        </div>
        <div className="flex gap-2 items-center p-3">
          <Button button="All" />
          <Button button="Active" />
          <Button button="Completed" />
        </div>
        <div className="pl-3 flex flex-col gap-2">
          <Task taskName={task.taskName} isCompleted={task.isCompleted} />
          <Task taskName={task1.taskName} isCompleted={task1.isCompleted} />
        </div>
        <div className="p-3 flex flex-col gap-4 items-center">
          <h3 className="text-[#6B7280] ">No tasks yet. Add one above!</h3>
          <h3 className="flex gap-2">
            Powered by
            <a className="text-[#3B73ED]" href="">
              Pinecone academy
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Todo;
