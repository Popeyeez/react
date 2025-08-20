export const Box = (props) => {
  return (
    <div className="w-75 h-140 bg-gray-100  rounded-2xl">
      <div className="w-75 h-60 flex justify-center items-center">
        <img className="w-45 h-45" src={props.image} />{" "}
      </div>
      <p className="pl-5 pt-5">{props.date}</p>
      <h2 className="pl-5 pt-5 font-bold">{props.title}</h2>
      <h3 className="pl-5 pt-5">{props.info}</h3>
      <button className="w-60 bg-blue-500 flex justify-center items-center text-white rounded-xl ml-8 mt-3">
        Read More
      </button>
    </div>
  );
};
