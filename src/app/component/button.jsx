export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-[#F3F4F6] text-black rounded h-10 items-center w-25 hover:bg-blue-500 hover:text-white"
    >
      {props.button}
      {props.children}
    </button>
  );
};
export default Button;
