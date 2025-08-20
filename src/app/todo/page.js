import { Input, Button } from "./component";

const Todo = () => {
  const data = [{}];
  return (
    <div className="bg-gray-200 h-screen flex justify-center pt-[60]">
      <div className="w-[377] h-[290] bg-white">
        <div className="text-2xl text-center pt-[24]">To-Do list</div>
        <div>
          <Input />
          <Button />
        </div>
        <div>
          <Button />
          <Button />
          <Button />
        </div>
        <h3></h3>
        <h3></h3>
      </div>
    </div>
  );
};

export default Todo;
