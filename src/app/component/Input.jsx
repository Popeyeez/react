export const Input = ({
  value,
  onChange,
  placeholder,
  type,
  label,
  error,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-[14px] font-semibold flex gap-1 text-[#334155]">
        {label}
        <span className="text-[#E14942] text-[14px] font-semibold">*</span>{" "}
      </div>
      <div>
        <input
          className={`p-2 w-full rounded-lg border ${
            error ? "border-red-500" : ""
          } `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          label={label}
        />
      </div>
      {error && <div className="text-red-500"> {error}</div>}
    </div>
  );
};
