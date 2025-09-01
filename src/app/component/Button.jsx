export const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={`h-[44px] bg-black rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
