export const Task = (props) => {
  return (
    <div className="w-[300px] h-[60px] bg-slate-300 rounded-md flex items-center gap-2 text-black p-3">
      <input type="checkbox" />
      <p className={props.isCompleted && "line-through"}>
        {props.taskName}
        {props.isCompleted}
      </p>
      {props.isCompleted ? (
        <button className="p-1 bg-red-200 text-red-500 rounded-xl">
          Delete
        </button>
      ) : (
        <button className="p-1 bg-blue-200 text-blue-500 rounded-xl">
          Completed
        </button>
      )}
    </div>
  );
};
