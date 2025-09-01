export const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      className="border  p-2 w-[full] rounded-lg"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
