export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
