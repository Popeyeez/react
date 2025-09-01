export const Button = ({ className = "", ...props }) => {
  return (
    <button
      className={`w-full mt-[130px] h-[44px] bg-black rounded-lg text-white ${className}`}
      {...props}
    ></button>
  );
};
